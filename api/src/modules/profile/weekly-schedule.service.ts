import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';
import { MasterProfileService } from '@Src/modules/profile/master-profile.service';
import { PatchMasterWeeklyScheduleDto } from '@Src/modules/user/dto/master.dto';
import { UserService } from '@Src/modules/user/user.service';

/**
 * Master's weekly schedule service
 */
@Injectable()
export class MasterWeeklyScheduleService {
  private readonly prismaService = prisma;

  /**
   * Master's weekly schedule constructor
   */
  constructor(
    @Inject(forwardRef(() => MasterProfileService))
    private readonly masterProfileService: MasterProfileService,
    private readonly userService: UserService,
  ) { }

  /**
   * Create master's weekly schedule
   *
   * @returns master weekly schedule
   */
  async create() {
    return await this.prismaService.masterWeeklySchedule.create({ data: {} });
  }

  /**
   * Get master weekly schedule
   *
   * @param param0 master ID
   * @returns master weekly schedule
   */
  async getWeeklySchedule({ id }: Pick<Prisma.MasterProfile, 'id'>) {
    const masterCandidate = await this.masterProfileService.getExists({
      where: {
        id,
      },
      include: {
        weeklySchedule: true,
      },
    });

    return masterCandidate.weeklySchedule;
  }

  /**
   * Patch master's weekly schedule
   *
   * @param user user
   * @param data data
   * @returns weekly schedule
   */
  async patchWeeklySchedule(
    user: Pick<Prisma.User, 'id'>,
    data: PatchMasterWeeklyScheduleDto,
  ) {
    const userProfile = await this.userService.getExists({
      where: {
        id: user.id,
      },
      include: {
        masterProfile: true,
      },
    });

    this.masterProfileService.checkIfUserIsMaster(userProfile);

    const updatedWeeklySchedule =
      await this.prismaService.masterWeeklySchedule.update({
        where: {
          id: userProfile.masterProfile.weeklyScheduleId,
        },
        data,
      });

    if (
      (
        !updatedWeeklySchedule.startTime ||
        !updatedWeeklySchedule.endTime
      ) &&
      userProfile.masterProfile.available
    ) {
      await this.masterProfileService.update({
        where: {
          id: userProfile.masterProfileId,
        },
        data: {
          available: false,
        },
      });
    } else if (!userProfile.masterProfile.available) {
      await this.masterProfileService.update({
        where: {
          id: userProfile.masterProfileId,
        },
        data: {
          available: true,
        },
      });
    }

    return updatedWeeklySchedule;
  }
}
