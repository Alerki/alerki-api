import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateAppointmentArgs,
  FindManyClientAppointmentsArgs,
  FindManyMasterAppointmentsArgs,
} from './dto';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { MasterScheduleService } from '../master-schedule/master-schedule.service';
import { appendNewDateWithTime } from '../../shared/utils/date-time.util';
import { paginate } from '../../shared/utils/pagination.util';
import { SystemCode } from '../../shared/data/system-codes.data';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly masterScheduleService: MasterScheduleService,
  ) {}

  async createAppointment(
    select: PrismaSelect,
    args: CreateAppointmentArgs,
    user: JWTData,
  ) {
    this.masterScheduleService.isStartDateValid(args.startAt);

    // Check user profiles
    const clientProfile =
      await this.commonPrismaService.clientProfiles.findFirst({
        where: {
          status: StatusEnum.PUBLISHED,
          Users: {
            some: {
              id: user.id,
              status: StatusEnum.PUBLISHED,
            },
          },
        },
      });

    if (!clientProfile) {
      throw new BadRequestException(SystemCode.NO_VALID_CLIENT_PROFILE);
    }

    // Check if master service available
    const masterService =
      await this.commonPrismaService.masterService.findFirst({
        where: {
          id: args.MasterServiceId,
          status: StatusEnum.PUBLISHED,
          MasterProfile: {
            status: StatusEnum.PUBLISHED,
            Users: {
              some: {
                status: StatusEnum.PUBLISHED,
              },
            },
          },
        },
      });

    if (!masterService) {
      throw new BadRequestException(SystemCode.MASTER_SERVICE_UNAVAILABLE);
    }

    const startAt = args.startAt;
    const endAt = appendNewDateWithTime(startAt, masterService.duration);

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
