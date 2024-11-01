import { BadRequestException, Injectable } from '@nestjs/common';
import {
  Appointments,
  MasterSchedule,
  MasterWeeklySchedule,
  Prisma,
} from '@prisma/client';

import { SystemCode } from '../../shared/data/system-codes.data';
import { StatusEnum } from '../../shared/enums/status.enum';
import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import {
  appendNewDateWithTime,
  checkTimespansForCollision,
  createMonthDateRange,
  generateDatesInTimespan,
  setNewEndOfTheDay,
  setNewStartOfTheDay,
} from '../../shared/utils/date-time.util';
import { MasterWeeklyScheduleService } from '../master-weekly-schedule/master-weekly-schedule.service';
import { ProfileService } from '../profile/profile.service';
import { ProfileValidationService } from '../profile/profile-validation.service';
import { MasterDaySchedule, TimeSlots } from './dto';
import { MasterScheduleValidationService } from './master-schedule-validation.service';

export interface MasterDayScheduleConfig {
  dayOff: boolean;
  from: Date;
  to: Date;
}

@Injectable()
export class MasterScheduleService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly masterScheduleValidationService: MasterScheduleValidationService,
    private readonly masterWeeklyScheduleService: MasterWeeklyScheduleService,
    private readonly profileService: ProfileService,
    private readonly profileValidationService: ProfileValidationService,
  ) {}

  async findValidMasterSchedule<
    ArgsT extends Prisma.MasterScheduleFindFirstArgs,
  >(where: Partial<Pick<MasterSchedule, 'id'>>, args?: ArgsT) {
    const masterSchedule =
      await this.commonPrismaService.masterSchedule.findFirst({
        where,
        ...args,
      });

    this.masterScheduleValidationService.isMasterScheduleDefined(
      masterSchedule,
      true,
    );
    this.masterScheduleValidationService.isMasterSchedulePublished(
      masterSchedule,
      true,
    );

    return masterSchedule! as Prisma.MasterScheduleGetPayload<ArgsT>;
  }

  async findManyValidMasterSchedules<
    ArgsT extends Prisma.MasterScheduleFindManyArgs,
  >(where: Prisma.MasterScheduleFindManyArgs['where'], args?: ArgsT) {
    const masterSchedules =
      await this.commonPrismaService.masterSchedule.findMany({
        where,
        ...args,
      });
    return masterSchedules.filter(
      (masterSchedule) =>
        this.masterScheduleValidationService.isMasterScheduleDefined(
          masterSchedule,
          true,
        ) &&
        this.masterScheduleValidationService.isMasterSchedulePublished(
          masterSchedule,
          true,
        ),
    );
  }

  /**
   * Check if the time is available to book
   *
   * @param masterProfileId master profile ID
   * @param startAt start at
   * @param endAt end at
   * @returns true - fix the time is available; false - if the time unavailable
   */
  async isTheTimeAvailableToBook(
    masterProfileId: string,
    startAt: Date,
    endAt: Date,
  ) {
    this.isStartDateValid(startAt);

    let availableToBook = true;

    const timespanDays = generateDatesInTimespan(startAt, endAt);
    const UNIX_DateWIthTimeStartAt = appendNewDateWithTime(
      new Date(0),
      startAt,
    );
    const UNIX_DateWithTimeEndAt = appendNewDateWithTime(new Date(0), endAt);

    // Get data that affects time availability
    // Check if master profile available or throw
    const userMaster = await this.profileService.findValidMasterProfile({
      MasterProfileId: masterProfileId,
    });

    const masterProfile =
      (await this.commonPrismaService.masterProfile.findFirst({
        where: {
          id: userMaster.MasterProfileId!,
        },
        include: {
          MasterWeeklySchedule: true,
          MasterSchedules: {
            where: {
              startAt: {
                lte: endAt,
              },
              endAt: {
                gt: startAt,
              },
            },
          },
          MasterServices: {
            where: {
              Appointments: {
                some: {
                  cancelled: false,
                  startAt: { lte: endAt },
                  endAt: { gt: startAt },
                },
              },
            },
            include: {
              Appointments: {
                where: {
                  cancelled: false,
                  startAt: { lte: endAt },
                  endAt: { gt: startAt },
                },
              },
            },
          },
        },
      }))!;

    // this.profileValidationService.checkIfUserAndMasterProfileAvailableOrThrow(
    //   userMaster,
    // );

    // First check schedule then weekly schedule
    if (masterProfile.MasterSchedules.length > 0) {
      // Check schedule
      if (masterProfile.MasterSchedules.find((i) => i.dayOff)) {
        availableToBook = false;
      }
    } else {
      // Check weekly schedule
      // Check if timespan is not day off
      const dayOffCheck = timespanDays.find(
        (i) =>
          !this.masterWeeklyScheduleService.checkIfDayIsWorkDayFromWeeklySchedule(
            userMaster.MasterProfile.MasterWeeklySchedule,
            i,
          ),
      );
      if (dayOffCheck) {
        availableToBook = false;
      }

      // Check for available time
      if (
        userMaster.MasterProfile.MasterWeeklySchedule.startAt >=
          UNIX_DateWithTimeEndAt &&
        userMaster.MasterProfile.MasterWeeklySchedule.endAt >=
          UNIX_DateWIthTimeStartAt
      ) {
        availableToBook = false;
      }
    }

    // Check appointments
    if (
      masterProfile.MasterServices.find(
        (i) => i.Appointments.length !== undefined && i.Appointments.length > 0,
      )
    ) {
      availableToBook = false;
    }

    if (!availableToBook) {
      throw new BadRequestException('The time unavailable to book');
    }
  }

  isStartDateValid(startAt: Date, throwError = true) {
    if (new Date().getTime() > startAt.getTime()) {
      if (throwError) {
        throw new BadRequestException(SystemCode.INVALID_INPUT);
      }
      return false;
    }
    return true;
  }

  /**
   * Get valid schedule form master schedules
   *
   * Logic: if there are day specific schedule for the day then use it else use weekly schedule´
   *
   * @param date the date to get schedule for
   * @param weeklySchedule weekly schedule
   * @param schedules day specific schedules
   * @returns schedule
   */
  getScheduleConfigFromScheduleAndWeeklySchedule(
    date: Date,
    weeklySchedule: MasterWeeklySchedule,
    schedules: Array<MasterSchedule>,
  ): MasterDayScheduleConfig {
    const localStartAt = setNewStartOfTheDay(date);
    const localEndAt = setNewEndOfTheDay(date);

    const schedule = schedules.find((i) =>
      checkTimespansForCollision(
        { start: i.startAt, end: i.endAt },
        { start: localStartAt, end: localEndAt },
      ),
    );

    if (schedule) {
      return {
        dayOff: schedule.dayOff,
        from: schedule.startAt,
        to: schedule.endAt,
      };
    }

    return {
      dayOff:
        !this.masterWeeklyScheduleService.checkIfDayIsWorkDayFromWeeklySchedule(
          weeklySchedule!,
          date,
        ),
      from: appendNewDateWithTime(date, weeklySchedule.startAt),
      to: appendNewDateWithTime(date, weeklySchedule.endAt),
    };
  }

  async generateMonthAvailability(
    MasterProfileId: string,
    year: number,
    month: number,
  ) {
    const masterProfile = await this.profileService.findValidMasterProfile({
      MasterProfileId,
    });

    const { dateFrom, dateTo } = createMonthDateRange(year, month);

    const days = generateDatesInTimespan(dateFrom, dateTo);

    const masterSchedules = await this.findManyValidMasterSchedules({
      MasterProfileId,
      startAt: { lte: dateTo },
      endAt: { gt: dateFrom },
    });

    const appointments = await this.commonPrismaService.appointments.findMany({
      where: {
        status: StatusEnum.PUBLISHED,
        MasterService: {
          MasterProfileId,
        },
        cancelled: false,
        startAt: { lte: dateTo },
        endAt: { gt: dateFrom },
      },
    });

    const monthSchedule: Array<MasterDaySchedule> = days.map((day) => {
      const dayScheduleConfig =
        this.getScheduleConfigFromScheduleAndWeeklySchedule(
          day,
          masterProfile.MasterProfile!.MasterWeeklySchedule!,
          masterSchedules,
        );
      return this.generateMasterDaySchedule(
        day,
        dayScheduleConfig,
        appointments,
      );
    });

    return monthSchedule;
  }

  async generateMasterMonthSchedule(
    MasterProfileId: string,
    year: number,
    month: number,
  ) {
    const masterProfile = await this.profileService.findValidMasterProfile({
      MasterProfileId,
    });

    const { dateFrom, dateTo } = createMonthDateRange(year, month);

    const days = generateDatesInTimespan(dateFrom, dateTo);

    const masterSchedules = await this.findManyValidMasterSchedules({
      MasterProfileId,
      startAt: { lte: dateTo },
      endAt: { gt: dateFrom },
    });

    const monthSchedule: Array<MasterDaySchedule> = days.map((day) => {
      const dayScheduleConfig =
        this.getScheduleConfigFromScheduleAndWeeklySchedule(
          day,
          masterProfile.MasterProfile!.MasterWeeklySchedule!,
          masterSchedules,
        );
      return this.generateMasterDaySchedule(day, dayScheduleConfig, []);
    });

    return monthSchedule;
  }

  generateMasterDaySchedule(
    date: Date,
    dayScheduleConfig: MasterDayScheduleConfig,
    appointments: Array<Appointments>,
  ): MasterDaySchedule {
    if (dayScheduleConfig.dayOff) {
      return {
        date,
        available: false,
        timeSlots: [],
      };
    }

    const availableStartDate = dayScheduleConfig.from;
    const availableEndDate = dayScheduleConfig.to;

    const processedAppointments = appointments
      .filter((i) =>
        checkTimespansForCollision(
          { start: dayScheduleConfig.from, end: dayScheduleConfig.to },
          { start: i.startAt, end: i.endAt },
        ),
      )
      .sort((a, b) => b.startAt.getTime() - a.startAt.getTime());

    if (processedAppointments.length === 0) {
      const isTimespanValid = availableStartDate < availableEndDate;
      return {
        date,
        available: isTimespanValid,
        timeSlots: isTimespanValid
          ? [
              {
                from: availableStartDate,
                to: availableEndDate,
              },
            ]
          : [],
      };
    }

    const timeSlots: Array<TimeSlots> = [];
    processedAppointments.forEach((appointment, i, appointments) => {
      // Process first appointment
      //    |         |  <== available time
      //    |    |       <== appointment
      // Or
      //    |         |  <== available time
      // |    |          <== appointment
      if (i === 0) {
        if (availableStartDate < appointment.startAt) {
          timeSlots.push({
            from: availableStartDate,
            to: appointment.startAt,
          });
        }
      }

      // Process last appointment
      // |         |    <== available time
      //      |    |    <== appointment
      // Or
      // |         |     <== available time
      //         |    |  <== appointment
      if (i === appointments.length - 1) {
        if (appointment.endAt < availableEndDate) {
          timeSlots.push({
            from: appointment.endAt,
            to: availableEndDate,
          });
          return;
        }
      }

      // Process middle appointments
      // |         |  <== available time
      //    |    |    <== appointment
      if (i !== 0 && i !== appointments.length - 1) {
        timeSlots.push({
          from: appointment.endAt,
          to: appointments[i + 1].startAt,
        });
      }
    });

    return {
      date,
      available: timeSlots.length !== 0,
      timeSlots,
    };
  }
}
