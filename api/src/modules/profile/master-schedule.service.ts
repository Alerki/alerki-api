import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { GetMasterScheduleQueries } from '@Module/user/dto/master.dto';
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
   * Get exists master schedule
   *
   * @param data data to search
   * @param callback callback
   * @returns master schedule
   */
  async getExists<T extends Prisma.Prisma.MasterScheduleFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T, Prisma.Prisma.MasterScheduleFindFirstArgs
    >,
    callback?: () => never,
  ) {
    // Check if master exists
    const candidate = await this.prismaService.masterSchedule.findFirst(data);

    if (!candidate) {
      if (!callback) {
        throw new NotFoundException('Master schedule not exists');
      }

      // istanbul ignore next
      callback();
    }

    return candidate;
  }

  /**
   * Find first master schedule
   *
   * @param data to find schedule
   * @returns master schedule
   */
  async findFirst(data: Prisma.Prisma.MasterScheduleFindFirstArgs) {
    return await this.prismaService.masterSchedule.findFirst(data);
  }

  /**
   * Find many master schedules
   *
   * @param data data to find
   * @returns master schedule
   */
  async findMany(data: Prisma.Prisma.MasterScheduleFindManyArgs) {
    return await this.prismaService.masterSchedule.findMany(data);
  }

  /**
   * Find schedule in a date range (from - to)
   *
   * @param param0 master ID
   * @param param1 from to range
   * @returns schedule
   */
  async findFromTo(
    { id: masterId }: Pick<Prisma.MasterProfile, 'id'>,
    { from, to }: Pick<GetMasterScheduleQueries, 'from' | 'to'>,
  ) {
    return await this.findMany({
      where: {
        masterId,
        date: {
          gte: new Date(from).toISOString(),
          lt: new Date(to).toISOString(),
        },
      },
    });
  }

  /**
   * Find by date
   *
   * @param param0 master ID
   * @param param1 date properties
   * @returns schedule
   */
  async findByDate(
    { id: masterId }: Pick<Prisma.MasterProfile, 'id'>,
    { year, month, date }:
      Pick<GetMasterScheduleQueries, 'year' | 'month' | 'date'>,
  ) {
    // Find for specified date
    if (year && month && date) {
      const searchDate = new Date();

      searchDate.setUTCFullYear(year);
      searchDate.setUTCMonth(month);
      searchDate.setUTCDate(date);

      return await this.prismaService.masterSchedule.findFirst({
        where: {
          masterId,
          date: searchDate.toISOString(),
        },
      });
    }

    // Find for current date
    const dateFrom = new Date();
    const dateTo = new Date();

    // Set year if exists
    if (year) {
      dateFrom.setUTCFullYear(year);
      dateTo.setUTCFullYear(year);
    }

    // Set month if exists
    if (month !== undefined) {
      dateFrom.setUTCMonth(month);
      dateTo.setUTCMonth(month);
      dateTo.setUTCMonth(month + 1);
      // dateTo.setUTCMilliseconds(-1);
    } else {
      dateTo.setUTCMonth(dateTo.getUTCMonth() + 1);
      // dateTo.setUTCMilliseconds(-1);
    }

    dateFrom.setUTCDate(0);
    dateTo.setUTCDate(0);

    return await this.findMany({
      where: {
        masterId,
        date: {
          gte: dateFrom.toISOString(),
          lt: dateTo.toISOString(),
        },
      },
    });
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

  /**
   * Delete master schedule
   *
   * @param data delete master schedule arguments
   * @returns deleted master schedule
   */
  async delete(data: Prisma.Prisma.MasterScheduleDeleteArgs) {
    return await this.prismaService.masterSchedule.delete(data);
  }
}
