import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { weekDays } from '../../master/data';
import { MasterProfileService } from '../../master/services/master-profile.service';
import { MasterServiceService } from '../../master/services/master-service.service';
import { MasterWeeklyScheduleService } from '../../master/services/master-weekly-schedule.service';
import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserService } from '../../user/services/user.service';
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
        clientProfileId: true,
      },
    });

    // Get master service
    const masterServiceCandidate = await this.masterServiceService.findExists({
      where: {
        id: data.masterServiceId,
        available: true,
      },
    });

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
    const endAt = new Date(data.startAt);

    endAt.setMilliseconds(
      endAt.getMilliseconds() + masterServiceCandidate.duration,
    );

    // Check if it is not day off
    if (!masterProfile.weeklySchedule[weekDays[data.startAt.getUTCDay() + 1]]) {
      throw new BadRequestException('This is day off');
    }

    // Check time
    if (
      data.startAt > masterProfile.weeklySchedule.endAt ||
      masterProfile.weeklySchedule.endAt > endAt
    ) {
      throw new BadRequestException(
        'Service time out of work master work hours',
      );
    }

    return this.appointmentService.create({
      data: {
        clientProfileId: clientCandidate.clientProfileId,
        masterProfileId: masterServiceCandidate.masterProfileId,
        masterServiceId: masterServiceCandidate.id,
        currency: masterServiceCandidate.currency,
        price: masterServiceCandidate.price,
        duration: masterServiceCandidate.duration,
        startAt: data.startAt,
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

    if (!userCandidate.isMaster || !userCandidate.masterProfileId) {
      throw new BadRequestException('User is not a master');
    }

    const where: Prisma.Prisma.AppointmentFindManyArgs['where'] = {};

    if (query.master && !query.client) {
      where.masterProfileId = userCandidate.masterProfileId;
    } else if (!query.master && query.client) {
      where.clientProfileId = userCandidate.clientProfileId;
    } else {
      where.OR = [
        {
          masterProfileId: userCandidate.masterProfileId,
        },
        {
          clientProfileId: userCandidate.clientProfileId,
        },
      ];
    }

    return this.appointmentService.findMany({
      where,
    });
  }
}
