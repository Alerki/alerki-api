import { forwardRef, Inject, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { MasterProfileService } from '@Module/profile/master-profile.service';
import { prisma } from '@Shared/services/prisma.service';

/**
 * Master week schedule service
 */
@Injectable()
export class MasterWeekScheduleService {
  private readonly prismaService = prisma;

  /**
   * Master week schedule constructor
   */
  constructor(
    @Inject(forwardRef(() => MasterProfileService))
    private readonly masterProfileService: MasterProfileService,
  ) { }

  /**
   * Create master week schedule
   *
   * @returns master week schedule
   */
  async create() {
    return await this.prismaService.masterWeekSchedule.create({ data: {} });
  }

  /**
   * Get master week schedule
   *
   * @param param0 master ID
   * @returns master week schedule
   */
  async getWeekSchedule({ id }: Pick<Prisma.MasterProfile, 'id'>) {
    const masterCandidate = await this.masterProfileService.getExists({
      where: {
        id,
      },
      include: {
        weekSchedule: true,
      },
    });

    return masterCandidate.weekSchedule;
  }
}
