import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma, { Appointment } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { isAsync } from '../../util/bunch.util';
import { DateRangeI, isCollision } from '../../util/date.util';

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

  async checkForCollisionWithOtherAppointments(
    appointments: Appointment[],
    date: DateRangeI,
    options?: {
      throwError?: boolean;
      callback?: (appointment: Appointment) => void | Promise<void>;
    },
  ) {
    for (const appointment of appointments) {
      if (
        isCollision(date, {
          from: appointment.startAt,
          to: appointment.endAt,
        })
      ) {
        if (options?.throwError === true) {
          throw new BadRequestException(
            'There are collision with other endpoint',
          );
        }

        if (typeof options?.callback !== 'undefined') {
          if (isAsync(options?.callback)) {
            await options?.callback(appointment);
          } else {
            options?.callback(appointment);
          }
        }

        return true;
      }
    }

    return false;
  }
}
