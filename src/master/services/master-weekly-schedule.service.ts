import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterWeeklyScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.Prisma.MasterWeeklyScheduleCreateArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleCreateArgs
    >,
  ) {
    return this.prismaService.masterWeeklySchedule.create(data);
  }

  async update<T extends Prisma.Prisma.MasterWeeklyScheduleUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleUpdateArgs
    >,
  ) {
    return this.prismaService.masterWeeklySchedule.update(data);
  }

  async delete<T extends Prisma.Prisma.MasterWeeklyScheduleDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleDeleteArgs
    >,
  ) {
    return this.prismaService.masterWeeklySchedule.delete(data);
  }

  async findFirst<T extends Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs
    >,
  ) {
    return this.prismaService.masterWeeklySchedule.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.MasterWeeklyScheduleFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleFindManyArgs
    >,
  ) {
    return this.prismaService.masterWeeklySchedule.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterWeeklyScheduleFindFirstArgs
    >,
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
