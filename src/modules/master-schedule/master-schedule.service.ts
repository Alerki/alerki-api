import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import {
  CreateMasterScheduleArgs,
  DeleteMasterScheduleArgs,
  UpdateMasterScheduleArgs,
} from './dto';
import { JWTData } from '../auth/interfaces';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { ProfileService } from '../profile/profile.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { LIST_OF_WEEK_DAYS } from '../../shared/data/date.data';
import {
  appendNewDateWithTime,
  generateDatesInTimespan,
} from '../../utils/date-time.util';

@Injectable()
export class MasterScheduleService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileService: ProfileService,
  ) {}

  async createMasterSchedule(
    select: PrismaSelect,
    args: CreateMasterScheduleArgs,
    { id }: JWTData,
  ) {
    // Validate dates
    if (args.startAt.getTime() >= args.endAt.getTime()) {
      throw new BadRequestException('startAt should be less that endAt');
    }
    if (args.startAt.getTime() < new Date().getTime()) {
      throw new BadRequestException(
        'Impossible to create schedule for the past',
      );
    }

    // Find master profile
    const masterProfile =
      await this.profileService.findExistingPublishedMasterProfileByUserId(id);

    // Check if there's no schedule for the date
    const scheduleCandidate =
      await this.commonPrismaService.masterSchedule.findFirst({
        where: {
          status: StatusEnum.PUBLISHED,
          startAt: {
            gte: args.startAt,
            lte: args.endAt,
          },
          endAt: {
            gte: args.startAt,
            lte: args.endAt,
          },
          MasterProfileId: masterProfile.id,
        },
      });

    if (scheduleCandidate) {
      throw new BadRequestException('Schedule for the timespan already exists');
    }

    // Create schedule
    return this.commonPrismaService.masterSchedule.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterProfileId: masterProfile.id,
        dayOff: args.dayOff,
        startAt: args.startAt,
        endAt: args.endAt,
        date_created: new Date(),
      },
      ...select,
    });
  }

  async updateMasterSchedule(
    select: PrismaSelect,
    args: UpdateMasterScheduleArgs,
    { id }: JWTData,
  ) {
    // Validate dates
    if (args.startAt.getTime() >= args.endAt.getTime()) {
      throw new BadRequestException('startAt should be less that endAt');
    }

    // Find master profile
    const masterProfile =
      await this.profileService.findExistingPublishedMasterProfileByUserId(id);

    // Check if there's no schedule for the date
    const scheduleCandidate =
      await this.commonPrismaService.masterSchedule.findFirst({
        where: {
          id: {
            not: args.id,
          },
          status: StatusEnum.PUBLISHED,
          startAt: {
            gte: args.startAt,
            lte: args.endAt,
          },
          endAt: {
            gte: args.startAt,
            lte: args.endAt,
          },
          MasterProfileId: masterProfile.id,
        },
      });

    if (scheduleCandidate) {
      throw new BadRequestException('Schedule for the timespan already exists');
    }

    // Create schedule
    return this.commonPrismaService.masterSchedule.update({
      where: {
        id: args.id,
      },
      data: {
        dayOff: args.dayOff,
        startAt: args.startAt,
        endAt: args.endAt,
        date_updated: new Date(),
      },
      ...select,
    });
  }

  async deleteMasterSchedule(
    select: PrismaSelect,
    args: DeleteMasterScheduleArgs,
    { id }: JWTData,
  ) {
    // Find master profile
    const masterProfile =
      await this.profileService.findExistingPublishedMasterProfileByUserId(id);

    // Check if there's schedule with the id
    const schedule = await this.commonPrismaService.masterSchedule.findFirst({
      where: {
        id: args.id,
        status: StatusEnum.PUBLISHED,
        MasterProfileId: masterProfile.id,
      },
    });

    if (!schedule) {
      throw new BadRequestException('Schedule not exists');
    }

    if (schedule.endAt.getTime() < new Date().getTime()) {
      throw new BadRequestException('Impossible to delete past schedules');
    }

    // Delete schedule
    await this.commonPrismaService.masterSchedule.delete({
      where: {
        id: args.id,
      },
    });
  }

  /**
   * Check if the timespan is available to book
   *
   * @param masterProfileId master profile ID
   * @param startAt start at
   * @param endAt end at
   * @returns true - fix the time is available; false - if the time unavailable
   */
  async checkForAvailableTime(
    masterProfileId: string,
    startAt: Date,
    endAt: Date,
  ) {
    const timespanDays = generateDatesInTimespan(startAt, endAt);
    const UNIX_DateWIthTimeStartAt = appendNewDateWithTime(
      new Date(0),
      startAt,
    );
    const UNIX_DateWIthTimeEndAt = appendNewDateWithTime(new Date(0), endAt);

    // Get data that affects time availability
    const masterProfile =
      await this.commonPrismaService.masterProfile.findFirst({
        where: {
          id: masterProfileId,
        },
        include: {
          MasterWeeklySchedule: true,
          MasterSchedules: {
            where: {
              startAt: {
                lte: endAt,
              },
              endAt: {
                lte: startAt,
              },
            },
          },
          MasterServices: {
            include: {
              Appointments: {
                where: {
                  confirmed: true,
                  cancelled: false,
                  startAt: {
                    lte: endAt,
                  },
                  endAt: {
                    lte: startAt,
                  },
                },
              },
            },
          },
        },
      });

    // First check schedule then weekly schedule
    if (masterProfile?.MasterSchedules) {
      // Check schedule
      if (masterProfile?.MasterSchedules?.find((i) => i.dayOff)) {
        return false;
      }
    } else {
      // Check weekly schedule
      if (masterProfile?.MasterWeeklySchedule) {
        // Check if timespan is not day off
        const dayOffCheck = timespanDays.find(
          (i) =>
            masterProfile?.MasterWeeklySchedule[
              LIST_OF_WEEK_DAYS[i.getUTCDay()]
            ],
        );
        if (dayOffCheck) {
          return false;
        }

        // Check for available time
        if (
          masterProfile?.MasterWeeklySchedule?.startAt >=
            UNIX_DateWIthTimeEndAt &&
          masterProfile?.MasterWeeklySchedule?.endAt >= UNIX_DateWIthTimeStartAt
        ) {
          return false;
        }
      }
    }

    // Check appointments
    if (
      masterProfile?.MasterServices?.find(
        (i) => i?.Appointments?.length !== undefined,
      )
    ) {
      return false;
    }

    return true;
  }
}
