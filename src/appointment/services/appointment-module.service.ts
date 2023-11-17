import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { MasterProfileService } from '../../master/services/master-profile.service';
import { MasterScheduleService } from '../../master/services/master-schedule.service';
import { MasterServiceService } from '../../master/services/master-service.service';
import { MasterWeeklyScheduleService } from '../../master/services/master-weekly-schedule.service';
import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserService } from '../../user/services/user.service';
import { createOneDayDateRange } from '../../util/date.util';
import {
  CreateAppointmentDto,
  GetAppointmentQueriesDto,
} from '../dtos/appointment.dto';
import { AppointmentService } from './appointment.service';

@Injectable()
export class AppointmentModuleService {
  constructor(
    private readonly userService: UserService,
    private readonly appointmentService: AppointmentService,
    private readonly masterServiceService: MasterServiceService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly masterScheduleService: MasterScheduleService,
    private readonly masterProfileService: MasterProfileService,
    private readonly prismaService: PrismaService,
  ) {}

  async createAppointment(user: IJwtTokenData, data: CreateAppointmentDto) {
    // Get client profile using user ID from JWT token
    const clientCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        clientProfileId: true,
        masterProfileId: true,
      },
    });

    // Get master service
    const masterServiceCandidate = await this.masterServiceService.findExists({
      where: {
        id: data.masterServiceId,
        available: true,
      },
    });

    // Check if user is not trying to create appointment for himself
    if (
      masterServiceCandidate.masterProfileId === clientCandidate.masterProfileId
    ) {
      throw new BadRequestException(
        'Unable to create an appointment for yourself',
      );
    }

    // Get master profile with weekly schedule
    const masterProfile = await this.masterProfileService.findExists({
      where: {
        id: masterServiceCandidate.masterProfileId,
      },
      include: {
        weeklySchedule: true,
      },
    });

    // Create end time based on start time from body and service duration
    const startAt = new Date(data.startAt);
    const endAt = new Date(startAt);
    endAt.setMilliseconds(
      endAt.getMilliseconds() + masterServiceCandidate.duration,
    );

    // Create date range for the appointment
    const appointmentDateRange = createOneDayDateRange(startAt);

    // Find day specific schedule
    const daySpecificSchedule =
      await this.prismaService.masterSchedule.findFirst({
        where: {
          date: {
            gte: appointmentDateRange.dateFrom,
            lt: appointmentDateRange.dateTo,
          },
        },
      });

    // Check if the new appointment satisfies master schedule
    this.masterScheduleService.checkIfDateRangeSatisfiesMasterSchedule(
      masterProfile.weeklySchedule,
      daySpecificSchedule,
      appointmentDateRange.dateFrom,
      {
        from: startAt,
        to: endAt,
      },
    );

    // Get appointments to check for collision with the new one
    const appointments = await this.prismaService.appointment.findMany({
      where: {
        startAt: {
          gte: appointmentDateRange.dateFrom,
          lt: appointmentDateRange.dateTo,
        },
      },
    });

    // Check for collisions
    await this.appointmentService.checkForCollisionWithOtherAppointments(
      appointments,
      {
        from: startAt,
        to: endAt,
      },
      {
        throwError: true,
      },
    );

    return this.appointmentService.create({
      data: {
        clientProfileId: clientCandidate.clientProfileId,
        masterProfileId: masterServiceCandidate.masterProfileId,
        masterServiceId: masterServiceCandidate.id,
        currency: masterServiceCandidate.currency,
        price: masterServiceCandidate.price,
        duration: masterServiceCandidate.duration,
        startAt: startAt,
        endAt: endAt,
      },
    });
  }

  async getAppointments(user: IJwtTokenData, query: GetAppointmentQueriesDto) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        clientProfileId: true,
        masterProfileId: true,
        isMaster: true,
      },
    });

    if (
      query.master &&
      (!userCandidate.isMaster || !userCandidate.masterProfileId)
    ) {
      throw new BadRequestException('User is not a master');
    }

    const where: Prisma.Prisma.AppointmentFindManyArgs['where'] = {};

    // Create query
    if (query.master && query.client) {
      where.OR = [
        {
          masterProfileId: userCandidate.masterProfileId!,
        },
        {
          clientProfileId: userCandidate.clientProfileId,
        },
      ];
    } else if (query.master) {
      where.masterProfileId = userCandidate.masterProfileId!;
    } else {
      where.clientProfileId = userCandidate.clientProfileId;
    }

    const selectUser = {
      select: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            username: true,
            pictureId: true,
          },
        },
      },
    };

    const appointments = await this.appointmentService.findMany({
      where,
      include: {
        clientProfile: selectUser,
        masterProfile: selectUser,
        masterService: {
          include: {
            service: true,
          },
        },
      },
      take: query.limit,
      skip: query.limit * (query.page - 1),
    });

    return {
      totalNumber: await this.prismaService.appointment.count({
        where,
      }),
      data: appointments,
    };
  }
}
