import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import {
  setNewEndOfTheDay,
  setNewStartOfTheDay,
} from '../../shared/utils/date-time.util';
import { JWTData } from '../auth/interfaces';
import { ProfileService } from '../profile/profile.service';
import {
  CreateMasterScheduleArgs,
  GetMasterAvailabilityArgs,
  GetMasterScheduleArgs,
} from './dto';
import { MasterScheduleService } from './master-schedule.service';

@Injectable()
export class MasterScheduleResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileService: ProfileService,
    private readonly masterScheduleService: MasterScheduleService,
  ) {}

  async updateMasterSchedule(
    select: PrismaSelect,
    args: CreateMasterScheduleArgs,
    { id }: JWTData,
  ) {
    // Validate dates
    if (
      args.startAt.getTime() >= args.endAt.getTime() &&
      setNewEndOfTheDay(args.startAt).getTime() >= args.endAt.getTime()
    ) {
      throw new BadRequestException('startAt should be less that endAt');
    }
    if (args.startAt.getTime() < new Date().getTime()) {
      throw new BadRequestException(
        'Impossible to create schedule for the past',
      );
    }

    const localStartAt = setNewStartOfTheDay(args.startAt);
    const localEndAt = setNewEndOfTheDay(args.endAt);

    // Find master profile
    const user = await this.profileService.findValidMasterProfile({
      id,
    });

    // Check if there's no schedule for the date
    const scheduleCandidate =
      await this.commonPrismaService.masterSchedule.findFirst({
        where: {
          status: StatusEnum.PUBLISHED,
          startAt: {
            gte: localStartAt,
            lte: localEndAt,
          },
          endAt: {
            gte: localStartAt,
            lte: localEndAt,
          },
          MasterProfileId: user!.MasterProfileId!,
        },
      });

    if (scheduleCandidate) {
      return this.commonPrismaService.masterSchedule.update({
        where: {
          id: scheduleCandidate.id,
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

    // Create schedule
    return this.commonPrismaService.masterSchedule.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterProfileId: user!.MasterProfile!.id,
        dayOff: args.dayOff,
        startAt: args.startAt,
        endAt: args.endAt,
        date_created: new Date(),
      },
      ...select,
    });
  }

  async getMasterSchedule(args: GetMasterScheduleArgs, { id }: JWTData) {
    const localStartAt = setNewStartOfTheDay(args.date);
    const localEndAt = setNewEndOfTheDay(args.date);

    // Find master profile
    const user = await this.profileService.findValidMasterProfile({
      id,
    });

    // Check if there's no schedule for the date
    const scheduleCandidate =
      await this.commonPrismaService.masterSchedule.findFirst({
        where: {
          status: StatusEnum.PUBLISHED,
          startAt: {
            gte: localStartAt,
            lte: localEndAt,
          },
          endAt: {
            gte: localStartAt,
            lte: localEndAt,
          },
          MasterProfileId: user!.MasterProfileId!,
        },
      });

    if (!scheduleCandidate) {
      return null;
    }

    return scheduleCandidate;
  }

  async getMasterMonthAvailability(args: GetMasterAvailabilityArgs) {
    return this.masterScheduleService.generateMonthAvailability(
      args.MasterProfileId,
      args.year,
      args.month,
    );
  }

  async getMasterMonthSchedule(args: GetMasterAvailabilityArgs) {
    return this.masterScheduleService.generateMasterMonthSchedule(
      args.MasterProfileId,
      args.year,
      args.month,
    );
  }
}
