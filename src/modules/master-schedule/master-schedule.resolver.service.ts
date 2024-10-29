import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { JWTData } from '../auth/interfaces';
import { ProfileService } from '../profile/profile.service';
import {
  CreateMasterScheduleArgs,
  DeleteMasterScheduleArgs,
  GetMasterAvailabilityArgs,
  UpdateMasterScheduleArgs,
} from './dto';
import { MasterScheduleService } from './master-schedule.service';

@Injectable()
export class MasterScheduleResolverService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileService: ProfileService,
    private readonly masterScheduleService: MasterScheduleService,
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
    const user = await this.profileService.findValidMasterProfile({
      id,
    });

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
          MasterProfileId: user!.MasterProfileId!,
        },
      });

    if (scheduleCandidate) {
      throw new BadRequestException(
        SystemCode.SCHEDULE_FOR_THE_TIMESPAN_ALREADY_EXISTS,
      );
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
    const user = await this.profileService.findValidMasterProfile({
      id,
    });

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
          MasterProfileId: user!.MasterProfileId!,
        },
      });

    if (scheduleCandidate) {
      throw new BadRequestException(
        SystemCode.SCHEDULE_FOR_THE_TIMESPAN_ALREADY_EXISTS,
      );
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
    const user = await this.profileService.findValidMasterProfile({
      id,
    });

    // Check if there's schedule with the id
    const schedule = await this.masterScheduleService.findValidMasterSchedule(
      {},
      {
        where: {
          id: args.id,
          MasterProfileId: user!.MasterProfileId!,
        },
      },
    );

    if (schedule.endAt.getTime() < new Date().getTime()) {
      throw new BadRequestException('Impossible to delete past schedules');
    }

    // Delete schedule
    await this.commonPrismaService.masterSchedule.delete({
      where: {
        id: args.id,
      },
      ...select,
    });
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
