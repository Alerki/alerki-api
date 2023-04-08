import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { MasterServiceService } from '../../master/services/master-service.service';
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
  ) {}

  async createAppointment(user: IJwtTokenData, data: CreateAppointmentDto) {
    const clientCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
      select: {
        clientProfileId: true,
      },
    });

    const masterServiceCandidate = await this.masterServiceService.findExists({
      where: {
        id: data.masterServiceId,
        available: true,
      },
    });

    const endAt = new Date(data.startAt);

    endAt.setMilliseconds(
      endAt.getMilliseconds() + masterServiceCandidate.duration,
    );

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
