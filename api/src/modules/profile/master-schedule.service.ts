import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * Master schedule service
 */
@Injectable()
export class MasterScheduleService {
  readonly prismaService = prisma;

  /**
   * Master schedule service constructor
   */
  constructor() { }

  /**
   * Find first master schedule
   *
   * @param data to find schedule
   * @returns master schedule
   */
  async findFirst(data: Prisma.Prisma.MasterScheduleFindFirstArgs) {
    return this.prismaService.masterSchedule.findFirst(data);
  }

  /**
   * Find many master schedules
   *
   * @param data to find schedule
   * @returns
   */
  async findMany(data: Prisma.Prisma.MasterScheduleFindManyArgs) {
    return this.prismaService.masterSchedule.findMany(data);
  }

  /**
   * Create master schedule
   *
   * @param data create master schedule arguments
   * @returns new client profile
   */
  async create(data: Prisma.Prisma.MasterScheduleCreateArgs) {
    return await this.prismaService.masterSchedule.create(data);
  }
}
