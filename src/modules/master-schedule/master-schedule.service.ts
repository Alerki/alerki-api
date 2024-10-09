import { BadRequestException, Injectable } from '@nestjs/common';
import { MasterSchedule, Prisma } from '@prisma/client';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { LIST_OF_WEEK_DAYS } from '../../shared/data/date.data';
import {
  appendNewDateWithTime,
  generateDatesInTimespan,
} from '../../shared/utils/date-time.util';
import { SystemCode } from '../../shared/data/system-codes.data';
import { MasterScheduleValidationService } from './master-schedule-validatoin.service';

@Injectable()
export class MasterScheduleService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly masterScheduleValidationService: MasterScheduleValidationService,
  ) {}

  async findValidMasterSchedule<
    ArgsT extends Prisma.MasterScheduleFindFirstArgs,
  >(where: Partial<Pick<MasterSchedule, 'id'>>, args?: ArgsT) {
    try {
      const masterSchedule = await this.findValidMasterScheduleOrThrow(
        where,
        args,
      );
      return masterSchedule;
    } catch (e) {
      return undefined;
    }
  }

  async findValidMasterScheduleOrThrow<
    ArgsT extends Prisma.MasterScheduleFindFirstArgs,
  >(where: Partial<Pick<MasterSchedule, 'id'>>, args?: ArgsT) {
    const masterSchedule =
      await this.commonPrismaService.masterSchedule.findFirst({
        where,
        ...args,
      });

    this.masterScheduleValidationService.isMasterScheduleDefined(
      masterSchedule,
      true,
    );
    this.masterScheduleValidationService.isMasterSchedulePublished(
      masterSchedule,
      true,
    );

    return masterSchedule! as Prisma.MasterScheduleGetPayload<ArgsT>;
  }

  /**
   * Check if the time is available to book
   *
   * @param masterProfileId master profile ID
   * @param startAt start at
   * @param endAt end at
   * @returns true - fix the time is available; false - if the time unavailable
   */
  async isTheTimeAvailableToBook(
    masterProfileId: string,
    startAt: Date,
    endAt: Date,
  ) {
    this.isStartDateValid(startAt);

    let availableToBook = true;

    const timespanDays = generateDatesInTimespan(startAt, endAt);
    const UNIX_DateWIthTimeStartAt = appendNewDateWithTime(
      new Date(0),
      startAt,
    );
    const UNIX_DateWithTimeEndAt = appendNewDateWithTime(new Date(0), endAt);

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
            where: {
              Appointments: {
                some: {
                  cancelled: false,
                  startAt: { lte: endAt },
                  endAt: { gte: startAt },
                },
              },
            },
            include: {
              Appointments: {
                where: {
                  cancelled: false,
                  startAt: { lte: endAt },
                  endAt: { gte: startAt },
                },
              },
            },
          },
        },
      });

    if (!masterProfile) {
      throw new BadRequestException('MasterProfile not exists');
    }

    if (!masterProfile.MasterWeeklySchedule) {
      throw new BadRequestException('Master profile is not fully setup');
    }

    // First check schedule then weekly schedule
    if (masterProfile.MasterSchedules.length > 0) {
      // Check schedule
      if (masterProfile.MasterSchedules.find((i) => i.dayOff)) {
        availableToBook = false;
      }
    } else {
      // Check weekly schedule
      // Check if timespan is not day off
      const dayOffCheck = timespanDays.find(
        (i) =>
          !masterProfile.MasterWeeklySchedule![
            LIST_OF_WEEK_DAYS[i.getUTCDay()]
          ],
      );
      if (dayOffCheck) {
        availableToBook = false;
      }

      // Check for available time
      if (
        masterProfile.MasterWeeklySchedule.startAt >= UNIX_DateWithTimeEndAt &&
        masterProfile.MasterWeeklySchedule.endAt >= UNIX_DateWIthTimeStartAt
      ) {
        availableToBook = false;
      }
    }

    // Check appointments
    if (
      masterProfile.MasterServices.find(
        (i) => i.Appointments.length !== undefined && i.Appointments.length > 0,
      )
    ) {
      availableToBook = false;
    }

    if (!availableToBook) {
      throw new BadRequestException('The time unavailable to book');
    }
  }

  isStartDateValid(startAt: Date, throwError = true) {
    if (new Date().getTime() > startAt.getTime()) {
      if (throwError) {
        throw new BadRequestException(SystemCode.INVALID_INPUT);
      }
      return false;
    }
    return true;
  }
}
