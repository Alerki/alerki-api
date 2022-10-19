import { forwardRef, Inject, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { MasterProfileService } from '@Module/profile/master-profile.service';
import { PatchMasterWeekScheduleDto } from '@Module/user/dto/master.dto';
import { UserService } from '@Module/user/user.service';
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
    private readonly userService: UserService,
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

  /**
   * Patch master's week schedule
   *
   * @param user user
   * @param data data
   * @returns week schedule
   */
  async patchWeekSchedule(
    user: Pick<Prisma.User, 'id'>,
    data: PatchMasterWeekScheduleDto,
  ) {
    const userProfile = await this.userService.getExists({
      where: {
        id: user.id,
      },
      include: {
        masterProfile: true,
      },
    });

    return await this.prismaService.masterWeekSchedule.update({
      where: {
        id: userProfile.masterProfile.weekScheduleId,
      },
      data,
    });
  }
}
