import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAppointmentArgs } from './dto';
import { JWTData } from '../auth/interfaces';
import { PrismaSelect } from '@paljs/plugins';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { StatusEnum } from '../../shared/enums/status.enum';
import { MasterScheduleService } from '../master-schedule/master-schedule.service';
import { appendNewDateWithTime } from '../../utils/date-time.util';

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
    // Check if client profile and it's user exists and published
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
      throw new BadRequestException('There is no client profile');
    }

    // Check if master service and profile and user exists and published
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
      throw new BadRequestException('Master service unavailable');
    }

    const startAt = args.startAt;
    const endAt = appendNewDateWithTime(startAt, masterService.duration);

    const availableToBook =
      await this.masterScheduleService.checkForAvailableTime(
        masterService.MasterProfileId,
        startAt,
        endAt,
      );
    console.log(availableToBook, '<< availableToBook');

    if (!availableToBook) {
      throw new BadRequestException('The time unavailable to book');
    }

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
}
