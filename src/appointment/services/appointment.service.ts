import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.AppointmentCreateArgs) {
    return this.prismaService.appointment.create(data);
  }

  async update(data: Prisma.AppointmentUpdateArgs) {
    return this.prismaService.appointment.update(data);
  }

  async delete(data: Prisma.AppointmentDeleteArgs) {
    return this.prismaService.appointment.delete(data);
  }

  async findFirst(data: Prisma.AppointmentFindFirstArgs) {
    return this.prismaService.appointment.findFirst(data);
  }

  async findMany(data: Prisma.AppointmentFindManyArgs) {
    return this.prismaService.appointment.findMany(data);
  }

  async findExists(
    data: Prisma.AppointmentFindFirstArgs,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.appointment.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Appointment not exists');
    }

    return candidate;
  }
}
