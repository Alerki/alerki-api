import { MasterWeeklyScheduleService } from '@Src/modules/profile/weekly-schedule.service';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
   * @param masterWeeklyScheduleService master weekly schedule service
   */
  constructor(
    @Inject(forwardRef(() => MasterWeeklyScheduleService))
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
  ) { }

  /**
   * Create master profile
   *
   * @param data
   * @returns
   */
  async create(data: Prisma.Prisma.MasterProfileCreateArgs = { data: {} }) {
    // Create master weekly schedule
    const newWeeklySchedule = await this.masterWeeklyScheduleService.create();

    data.data.weeklySchedule = {
      connect: {
        id: newWeeklySchedule.id,
      },
    };

    return this.prismaService.masterProfile.create(data);
  }

  /**
   * Update master profile
   *
   * @param data data to update
   * @returns updated master profile
   */
  async update(data: Prisma.Prisma.MasterProfileUpdateArgs) {
    return await this.prismaService.masterProfile.update(data);
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

      // istanbul ignore next
      callback();
    }

    return candidate;
  }

  /**
   * Check if user is a master
   *
   * @param user user profile
   */
  checkIfUserIsMaster(user: Prisma.User) {
    if (!user.roles.includes('master')) {
      throw new BadRequestException('User is not a master');
    }
  }

  checkIfProfileIsAvailable(
    user: Prisma.User & { masterProfile: Prisma.MasterProfile },
  ) {
    if (!user.masterProfile.available) {
      throw new BadRequestException(
        'Master profile is unavailable, please finish setting up account',
      );
    }
  }
}
