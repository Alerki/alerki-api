/* eslint-disable max-len */
import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import {
  GeneralConfig,
  WeekDays,
} from '@Config/api/property.config';
import { AppointmentService } from '@Module/appointment/appointment.service';
import { CreateAppointmentDto } from '@Module/appointment/dto/appointment.dto';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { MasterScheduleService } from '@Module/profile/master-schedule.service';
import { MasterServiceService } from '@Module/profile/master-service.service';
import { MasterWeeklyScheduleService } from '@Module/profile/weekly-schedule.service';
import { UserService } from '@Module/user/user.service';

/**
 * Appointment controller service
 */
@Injectable()
export class AppointmentControllerService {
  /**
   * Appointment controller service constructor
   *
   * @param userService user service
   * @param masterServiceService master service service
   * @param masterScheduleService master schedule service
   * @param masterWeeklyScheduleService master weekly schedule service
   * @param appointmentService appointment service
   */
  constructor(
    private readonly userService: UserService,
    private readonly masterServiceService: MasterServiceService,
    private readonly masterScheduleService: MasterScheduleService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly masterProfileService: MasterProfileService,
    private readonly clientProfileService: ClientProfileService,
    private readonly appointmentService: AppointmentService,
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
    if (new Date(data.startTime) < new Date()) {
      throw new BadRequestException(
        'Impossible to make appointment in the past',
      );
    }

    const profiles: {
      client?: Prisma.User,
      master?: Prisma.User,
    } = {};

    const userCandidate = await this.userService.getExists({
      where: {
        id: userId,
      },
      include: {
        masterProfile: true,
      },
    });

    const serviceCandidate = await this.masterServiceService.getExists({
      where: {
        id: data.masterServiceId,
      },
    });

    // Fill profiles
    if (data.clientId === userCandidate.clientProfileId) {
      profiles.client = userCandidate;
      profiles.master = await this.userService.getExists({
        where: {
          masterProfileId: serviceCandidate.masterId,
        },
        include: {
          masterProfile: true,
        },
      });
    } else if (serviceCandidate.masterId === userCandidate.masterProfileId) {
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

    if (!profiles.master.roles.includes('master')) {
      throw new BadRequestException('User is not a master');
    }

    if (!profiles.master?.roles.includes('master')) {
      throw new BadRequestException('Master unavailable');
    }

    const endTime = new Date(data.startTime);
    endTime.setUTCMilliseconds(serviceCandidate.duration);

    if (data.startTime > endTime) {
      throw new BadRequestException(
        'Start time impossible to be greater than end time',
      );
    }

    // Check schedule
    const dayOffErrorMessage = 'The day is day off';

    const daySpecificSchedule = await this.masterScheduleService.findFirst({
      where: {
        date: data.startTime,
      },
    });

    if (daySpecificSchedule) {
      if (daySpecificSchedule.dayOff) {
        throw new BadRequestException(dayOffErrorMessage);
      }

      const checkStartTime = new Date(0);
      checkStartTime.setUTCHours(data.startTime.getUTCHours());
      checkStartTime.setUTCMinutes(data.startTime.getUTCMinutes());
      checkStartTime.setUTCSeconds(data.startTime.getUTCSeconds());
      checkStartTime.setUTCMilliseconds(data.startTime.getUTCMilliseconds());
      const checkEndTime = new Date(0);
      checkEndTime.setUTCHours(endTime.getUTCHours());
      checkEndTime.setUTCMinutes(endTime.getUTCMinutes());
      checkEndTime.setUTCSeconds(endTime.getUTCSeconds());
      checkEndTime.setUTCMilliseconds(endTime.getUTCMilliseconds());

      if (
        daySpecificSchedule.startTime > checkStartTime ||
        checkEndTime > daySpecificSchedule.endTime
      ) {
        throw new BadRequestException(
          'Appointment time is outside of the day specify schedule available time',
        );
      }
    }

    let weekSchedule;

    if (!daySpecificSchedule) {
      weekSchedule =
        await this.masterWeeklyScheduleService.getWeeklySchedule(
          { id: profiles.master.masterProfileId },
        );

      if (
        !weekSchedule[
          GeneralConfig.weekDays[data.startTime.getUTCDay()] as WeekDays
        ]
      ) {
        throw new BadRequestException(dayOffErrorMessage);
      }

      const checkStartTime = new Date(0);
      checkStartTime.setUTCHours(data.startTime.getUTCHours());
      checkStartTime.setUTCMinutes(data.startTime.getUTCMinutes());
      checkStartTime.setUTCSeconds(data.startTime.getUTCSeconds());
      checkStartTime.setUTCMilliseconds(data.startTime.getUTCMilliseconds());
      const checkEndTime = new Date(0);
      checkEndTime.setUTCHours(endTime.getUTCHours());
      checkEndTime.setUTCMinutes(endTime.getUTCMinutes());
      checkEndTime.setUTCSeconds(endTime.getUTCSeconds());
      checkEndTime.setUTCMilliseconds(endTime.getUTCMilliseconds());

      if (
        weekSchedule.startTime > data.startTime ||
        endTime > weekSchedule.endTime
      ) {
        throw new BadRequestException(
          'Appointment time is outside of the week schedule available time',
        );
      }
    }

    // Check appointments overlap
    const dayStartTime = new Date(data.startTime);
    dayStartTime.setUTCHours(0);
    dayStartTime.setUTCMinutes(0);
    dayStartTime.setUTCSeconds(0);
    dayStartTime.setUTCMilliseconds(0);

    const dayEndTime = new Date(dayStartTime);
    dayEndTime.setUTCDate(dayEndTime.getUTCDate() + 1);
    dayEndTime.setUTCHours(0);
    dayEndTime.setUTCMinutes(0);
    dayEndTime.setUTCSeconds(0);
    dayEndTime.setUTCMilliseconds(0);

    const checkAppointments = await this.appointmentService.findMany({
      where: {
        startTime: {
          gte: dayStartTime,
          lt: dayEndTime,
        },
      },
    });

    if (checkAppointments.length !== 0) {
      checkAppointments.forEach(appointment => {
        if (
          appointment.startTime < data.startTime &&
          appointment.endTime > endTime
        ) {
          throw new BadRequestException('This time is busy');
        }
      });
    }

    return await this.appointmentService.create({
      masterId: profiles.master.masterProfileId,
      masterServiceId: serviceCandidate.id,
      clientId: profiles.client.clientProfileId,
      startTime: data.startTime,
      endTime: endTime,
      timezoneOffset:
        daySpecificSchedule?.timezoneOffset ||
        weekSchedule?.timezoneOffset,
    });
  }
}
