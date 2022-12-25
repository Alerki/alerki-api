/* eslint-disable max-len */
import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import {
  GeneralConfig,
  DaysOfWeek,
  daysOfWeek,
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

    const clientCandidate = await this.userService.getExists({
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

    const masterCandidate = await this.userService.getExists({
      where: {
        masterProfileId: serviceCandidate.masterId,
      },
      include: {
        masterProfile: true,
      },
    });

    if (clientCandidate.id === masterCandidate.id) {
      throw new BadRequestException('Impossible to make appointment to itself');
    }

    if (!masterCandidate.masterProfile.available) {
      throw new BadRequestException('Master profile is unavailable');
    }

    const endTime = new Date(data.startTime);
    endTime.setUTCMilliseconds(serviceCandidate.duration);

    // Check schedule
    const dayOffErrorMessage = 'The day is day off';

    const daySpecificSchedule = await this.masterScheduleService.findFirst({
      where: {
        startTime: data.startTime,
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
          { id: masterCandidate.masterProfileId },
        );

      if (
        weekSchedule[
          daysOfWeek[data.startTime.getUTCDay()] as DaysOfWeek
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
        weekSchedule.startTime > checkStartTime ||
        checkEndTime > weekSchedule.endTime
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
          Math.max(appointment.startTime.getTime(), data.startTime.getTime()) <=
          Math.min(appointment.endTime.getTime(), endTime.getTime())
        ) {
          console.log(appointment.startTime, appointment.endTime, data.startTime, endTime);
          throw new BadRequestException('This time is busy');
        }
      });
    }

    return await this.appointmentService.create({
      masterId: masterCandidate.masterProfileId,
      masterServiceId: serviceCandidate.id,
      clientId: clientCandidate.clientProfileId,
      startTime: data.startTime,
      endTime: endTime,
      timezoneOffset:
        daySpecificSchedule?.timezoneOffset ||
        weekSchedule.timezoneOffset,
    });
  }
}
