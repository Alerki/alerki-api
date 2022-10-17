import { Injectable } from '@nestjs/common';

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
  constructor() { }

  /**
   * Create master week schedule
   *
   * @returns master week schedule
   */
  async create() {
    return await this.prismaService.masterWeekSchedule.create({ data: {} });
  }
}
