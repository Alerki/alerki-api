import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class AppointmentService {
  private readonly prismaService = prisma;

  constructor() {}

  /**
   * Create appointment
   *
   * @param param0 appointment data
   * @returns new appointment
   */
  async create({
    masterId,
    masterServiceId,
    clientId,
    startTime,
    endTime,
    timezoneOffset,
  }: Pick<
    Prisma.Appointment,
    'masterId' |
    'masterServiceId' |
    'clientId' |
    'endTime' |
    'startTime' |
    'timezoneOffset'
  >) {
    return await this.prismaService.appointment.create({
      data: {
        masterId,
        masterServiceId,
        clientId,
        startTime,
        endTime,
        timezoneOffset,
      },
    });
  }

  /**
   * Find first appointment
   *
   * @param data search data
   * @returns appointment
   */
  async findFirst(data: Prisma.Prisma.AppointmentFindFirstArgs) {
    return await this.prismaService.appointment.findFirst(data);
  }

  /**
   * Find many appointments
   *
   * @param data search data
   * @returns appointments
   */
  async findMany(data: Prisma.Prisma.AppointmentFindManyArgs) {
    return await this.prismaService.appointment.findMany(data);
  }

  /**
   * Get exists appointment
   *
   * @param data data to find by
   * @param callback error callback
   * @returns exists appointment
   */
  async getExists<T extends Prisma.Prisma.AppointmentFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T, Prisma.Prisma.AppointmentFindFirstArgs
    >,
    callback?: () => never,
  ) {
    // Check if master exists
    const candidate = await this.findFirst(data);

    if (!candidate) {
      if (!callback) {
        throw new NotFoundException('Appointment not exists');
      }

      // istanbul ignore next
      callback();
    }

    return candidate;
  }
}
