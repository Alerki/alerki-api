import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.Prisma.AppointmentCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentCreateArgs>,
  ) {
    return this.prismaService.appointment.create(data);
  }

  async update<T extends Prisma.Prisma.AppointmentUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentUpdateArgs>,
  ) {
    return this.prismaService.appointment.update(data);
  }

  async delete<T extends Prisma.Prisma.AppointmentDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentDeleteArgs>,
  ) {
    return this.prismaService.appointment.delete(data);
  }

  async findFirst<T extends Prisma.Prisma.AppointmentFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentFindFirstArgs>,
  ) {
    return this.prismaService.appointment.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.AppointmentFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentFindManyArgs>,
  ) {
    return this.prismaService.appointment.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.AppointmentFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.AppointmentFindFirstArgs>,
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
