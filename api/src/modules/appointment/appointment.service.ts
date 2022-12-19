import { Injectable } from '@nestjs/common';
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
}
