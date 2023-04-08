import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterWeeklyScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.MasterWeeklyScheduleCreateArgs) {
    return this.prismaService.masterWeeklySchedule.create(data);
  }

  async update(data: Prisma.MasterWeeklyScheduleUpdateArgs) {
    return this.prismaService.masterWeeklySchedule.update(data);
  }

  async delete(data: Prisma.MasterWeeklyScheduleDeleteArgs) {
    return this.prismaService.masterWeeklySchedule.delete(data);
  }

  async findFirst(data: Prisma.MasterWeeklyScheduleFindFirstArgs) {
    return this.prismaService.masterWeeklySchedule.findFirst(data);
  }

  async findMany(data: Prisma.MasterWeeklyScheduleFindManyArgs) {
    return this.prismaService.masterWeeklySchedule.findMany(data);
  }

  async findExists(
    data: Prisma.MasterWeeklyScheduleFindFirstArgs,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.masterWeeklySchedule.findFirst(
      data,
    );

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Master service not exists');
    }

    return candidate;
  }
}
