import { MasterWeekScheduleService } from '@Module/profile/week-schedule.service';
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * Master profile service
 */
@Injectable()
export class MasterProfileService {
  private readonly prismaService = prisma;

  /**
   * Master profile service
   * @param masterWeekScheduleService master week schedule service
   */
  constructor(
    @Inject(forwardRef(() => MasterWeekScheduleService))
    private readonly masterWeekScheduleService: MasterWeekScheduleService,
  ) { }

  /**
   * Create master profile
   *
   * @param data
   * @returns
   */
  async create(data: Prisma.Prisma.MasterProfileCreateArgs = { data: {} }) {
    // Create master week schedule
    const newWeekSchedule = await this.masterWeekScheduleService.create();

    data.data.weekSchedule = {
      connect: {
        id: newWeekSchedule.id,
      },
    };

    return this.prismaService.masterProfile.create(data);
  }

  /**
   * Get exists master profile
   *
   * @param data get arguments
   * @param callback for custom error
   * @returns master profile
   */
  async getExists<T extends Prisma.Prisma.MasterProfileFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T, Prisma.Prisma.MasterProfileFindFirstArgs
    >,
    callback?: () => never,
  ) {
    // Check if master exists
    const candidate = await this.prismaService.masterProfile.findFirst(data);

    if (!candidate) {
      if (!callback) {
        throw new NotFoundException('Master profile not exists');
      }

      callback();
    }

    return candidate;
  }
}
