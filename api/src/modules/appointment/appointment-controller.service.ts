import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { CreateAppointmentDto } from '@Module/appointment/dto/appointment.dto';
import { UserService } from '@Module/user/user.service';
import { MasterServiceService } from '@Module/profile/master-service.service';
import { MasterScheduleService } from '@Module/profile/master-schedule.service';

@Injectable()
export class AppointmentControllerService {
  constructor(
    private readonly userService: UserService,
    private readonly masterServiceService: MasterServiceService,
    private readonly masterScheduleService: MasterScheduleService,
    // private readonly masterProfileService: MasterProfileService,
    // private readonly clientProfileService: ClientProfileService,
  ) { }

  /**
   * Create appointment
   *
   * @param param0 user ID
   * @param data appointment data
   * @returns new appointment
   */
  async createAppointment(
    { id: userId }: Pick<Prisma.User, 'id'>,
    data: CreateAppointmentDto,
  ) {
    const profiles: {
      client?: Prisma.User,
      master?: Prisma.User,
    } = {};

    const userCandidate = await this.userService.getExists({
      where: {
        id: userId,
      },
    });

    const serviceCandidate = await this.masterServiceService.getExists({
      where: {
        id: data.masterServiceId,
      },
    });

    // Fill profiles
    if (data.clientId === userCandidate.id) {
      profiles.client = userCandidate;
      profiles.master = await this.userService.getExists({
        where: {
          id: serviceCandidate.masterId,
        },
      });
    } else if (serviceCandidate.masterId === userCandidate.id) {
      profiles.master = userCandidate;
      profiles.client = await this.userService.getExists({
        where: {
          id: data.clientId,
        },
      });
    } else {
      throw new BadRequestException(
        'You need to put your own ID to client or master ID',
      );
    }

    // Get schedule
    const dayOffErrorMessage = 'The date is day off';

    const daySpecificSchedule = await this.masterScheduleService.findFirst({
      where: {
        date: data.startTime,
      },
    });

    if (daySpecificSchedule) {
      if (daySpecificSchedule.dayOff) {
        throw new BadRequestException(dayOffErrorMessage);
      }

      // if (daySpecificSchedule.)
    }



    // How to figure it out if time is available?
    // - try to get schedule for the date
    // - if not exists get week schedule
    // - check if it is not a day off
    // - check if time available by the schedule
    // - check if other appointment not exists for the time
    // - create appointment
  }
}
