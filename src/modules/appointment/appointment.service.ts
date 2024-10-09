import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';

import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { appendNewDateWithTime } from '../../shared/utils/date-time.util';
import { paginate } from '../../shared/utils/pagination.util';
import { JWTData } from '../auth/interfaces';
import { MasterScheduleService } from '../master-schedule/master-schedule.service';
import { MasterServiceService } from '../master-service/master-service.service';
import { ProfileService } from '../profile/profile.service';
import { ProfileValidationService } from '../profile/profile-validation.service';
import {
  CreateAppointmentArgs,
  FindManyClientAppointmentsArgs,
  FindManyMasterAppointmentsArgs,
} from './dto';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly profileService: ProfileService,
    private readonly profileValidationService: ProfileValidationService,
    private readonly masterServiceService: MasterServiceService,
    private readonly masterScheduleService: MasterScheduleService,
  ) {}

  /**
   * Create a new appointment
   *
   * The client side defined by user argument
   *
   * @param select select
   * @param args args
   * @param user user data
   * @returns a new appointment
   */
  async createAppointment(
    select: PrismaSelect,
    args: CreateAppointmentArgs,
    user: JWTData,
  ) {
    // Check if start time more that now
    this.masterScheduleService.isStartDateValid(args.startAt);

    // Check user and client profile
    const clientProfile =
      await this.profileService.findValidClientProfileOrThrow({
        id: user.id,
      });

    // Check if master service available
    const masterService =
      await this.masterServiceService.findValidMasterServiceOrThrow(
        {
          id: args.MasterServiceId,
        },
        {
          include: {
            MasterProfile: {
              include: {
                Users: true,
              },
            },
          },
        },
      );

    // Check if master profile available
    this.profileValidationService.checkIfUserAndMasterProfileAvailableOrThrow({
      ...masterService.MasterProfile.Users[0],
      MasterProfile: masterService.MasterProfile,
    });

    const startAt = args.startAt;
    const endAt = appendNewDateWithTime(startAt, masterService.duration);

    // Check if it possible to book the time
    await this.masterScheduleService.isTheTimeAvailableToBook(
      masterService.MasterProfileId,
      startAt,
      endAt,
    );

    return this.commonPrismaService.appointments.create({
      data: {
        status: StatusEnum.PUBLISHED,
        MasterServiceId: masterService.id,
        ClientProfileId: clientProfile.id,
        duration: masterService.duration,
        price: masterService.price,
        CurrencyId: masterService.CurrencyId,
        startAt,
        endAt,
        confirmed: false,
        cancelled: false,
        date_created: new Date(),
      },
      ...select,
    });
  }

  async findMasterAppointments(
    select: PrismaSelect,
    args: FindManyMasterAppointmentsArgs,
    user: JWTData,
  ) {
    return this.commonPrismaService.appointments.findMany({
      where: {
        status: StatusEnum.PUBLISHED,
        MasterService: {
          status: StatusEnum.PUBLISHED,
          MasterProfile: {
            status: StatusEnum.PUBLISHED,
            Users: {
              some: {
                id: user.id,
                status: StatusEnum.PUBLISHED,
              },
            },
          },
        },
      },
      ...paginate(args),
      ...select,
    });
  }

  async findClientAppointments(
    select: PrismaSelect,
    args: FindManyClientAppointmentsArgs,
    user: JWTData,
  ) {
    return this.commonPrismaService.appointments.findMany({
      where: {
        status: StatusEnum.PUBLISHED,
        ClientProfile: {
          status: StatusEnum.PUBLISHED,
          Users: {
            some: {
              id: user.id,
              status: StatusEnum.PUBLISHED,
            },
          },
        },
      },
      ...paginate(args),
      ...select,
    });
  }
}
