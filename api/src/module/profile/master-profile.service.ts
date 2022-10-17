import { MasterWeekScheduleService } from '@Module/profile/week-schedule.service';
import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class MasterProfileService {
  private readonly prismaService = prisma;

  constructor(
    private readonly masterWeekScheduleService: MasterWeekScheduleService,
  ) { }

  async create(data: Prisma.Prisma.MasterProfileCreateArgs = { data: {} }) {
    const newWeekSchedule = await this.masterWeekScheduleService.create();

    data.data.weekSchedule = {
      connect: {
        id: newWeekSchedule.id,
      },
    };

    return this.prismaService.masterProfile.create(data);
  }
}
