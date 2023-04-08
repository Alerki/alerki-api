import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterWeeklyScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.MasterWeeklyScheduleCreateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleCreateArgs>,
  ) {
    return this.prismaService.masterWeeklySchedule.create(data);
  }

  async update<T extends Prisma.MasterWeeklyScheduleUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleUpdateArgs>,
  ) {
    return this.prismaService.masterWeeklySchedule.update(data);
  }

  async delete<T extends Prisma.MasterWeeklyScheduleDeleteArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleDeleteArgs>,
  ) {
    return this.prismaService.masterWeeklySchedule.delete(data);
  }

  async findFirst<T extends Prisma.MasterWeeklyScheduleFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleFindFirstArgs>,
  ) {
    return this.prismaService.masterWeeklySchedule.findFirst(data);
  }

  async findMany<T extends Prisma.MasterWeeklyScheduleFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleFindManyArgs>,
  ) {
    return this.prismaService.masterWeeklySchedule.findMany(data);
  }

  async findExists<T extends Prisma.MasterWeeklyScheduleFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterWeeklyScheduleFindFirstArgs>,
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
