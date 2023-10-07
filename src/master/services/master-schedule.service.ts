import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { IJwtTokenData } from '../../auth/interfaces';
import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserService } from '../../user/services/user.service';
import {
  checkIfStartTimeLessThanEndAsString,
  getDayStartsFromMonday,
  setDate0,
  setTime0,
} from '../../util/date.util';
import { checkIfUserIsMaster } from '../../util/user.util';
import { weekDays } from '../data';
import {
  CreateMasterScheduleDto,
  GetMasterCalendarQueryDto,
  GetMasterScheduleQueryDto,
  UpdateMasterScheduleDto,
} from '../dto/master.dto';
import { MasterProfileService } from './master-profile.service';

@Injectable()
export class MasterScheduleService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private readonly masterProfileService: MasterProfileService,
  ) {}

  async create(user: IJwtTokenData, data: CreateMasterScheduleDto) {
    const userCandidate = await this.userService.findExistsMaster({
      where: {
        id: user.id,
      },
    });

    // Check if there aren't schedule for tha date already
    const checkDate = await this.prismaService.masterSchedule.findFirst({
      where: {
        masterProfileId: userCandidate.masterProfileId,
        date: data.date,
      },
    });

    if (checkDate) {
      throw new BadRequestException('Schedule for the date already exists');
    }

    // If the day is day off then we don't need start and end time
    if (data.dayOff) {
      return this.prismaService.masterSchedule.create({
        data: {
          masterProfileId: userCandidate.masterProfileId,
          date: data.date,
          dayOff: true,
        },
      });
    } else {
      // Check the time
      if (!data.startAt || !data.endAt) {
        throw new BadRequestException('Start and end time both required');
      }

      const time = checkIfStartTimeLessThanEndAsString(
        data.startAt,
        data.endAt,
      );

      return this.prismaService.masterSchedule.create({
        data: {
          masterProfileId: userCandidate.masterProfileId,
          date: data.date,
          startAt: time.startAt,
          endAt: time.endAt,
          dayOff: false,
        },
      });
    }
  }

  async updateSchedule(
    user: IJwtTokenData,
    scheduleId: string,
    data: UpdateMasterScheduleDto,
  ) {
    const userCandidate = await this.userService.findExists({
      where: {
        id: user.id,
      },
    });

    checkIfUserIsMaster(userCandidate);

    const masterScheduleCandidate = await this.findExists({
      where: {
        id: scheduleId,
      },
    });

    if (
      masterScheduleCandidate.masterProfileId !== userCandidate.masterProfileId
    ) {
      throw new BadRequestException('This schedule is not belongs to you');
    }

    // If the day is day off then we don't need start and end time
    if (data.dayOff) {
      return this.prismaService.masterSchedule.update({
        where: {
          id: scheduleId,
        },
        data: {
          dayOff: true,
          startAt: null,
          endAt: null,
        },
      });
    } else {
      // Check the time
      if (!data.startAt || !data.endAt) {
        throw new BadRequestException('Start and end time both required');
      }

      const time = checkIfStartTimeLessThanEndAsString(
        data.startAt,
        data.endAt,
      );

      setDate0(time.startAt);
      setDate0(time.endAt);

      return this.prismaService.masterSchedule.update({
        where: {
          id: scheduleId,
        },
        data: {
          dayOff: false,
          startAt: time.startAt,
          endAt: time.endAt,
        },
      });
    }
  }

  async getMasterSchedule(masterId: string, query: GetMasterScheduleQueryDto) {
    const masterCandidate = await this.masterProfileService.findExists({
      where: {
        id: masterId,
      },
    });

    if (query.from || query.to) {
      // TODO
    } else if (query.year || query.month) {
      // TODO
    } else {
      const dateFrom = new Date();
      setTime0(dateFrom);

      const dateTo = new Date();
      setTime0(dateTo);
      dateTo.setUTCMonth(dateTo.getUTCMonth() + 1);
      dateTo.setUTCDate(0);

      return this.prismaService.masterSchedule.findMany({
        where: {
          masterProfileId: masterCandidate.id,
          date: {
            gte: dateFrom,
            lte: dateTo,
          },
        },
      });
    }
  }

  async getMasterScheduleById(id: string) {
    return this.findExists({
      where: {
        id,
      },
    });
  }

  async getMasterCalendar(masterId: string, query: GetMasterCalendarQueryDto) {
    const dateFrom = new Date(0);
    setTime0(dateFrom);
    dateFrom.setUTCFullYear(+query.year);
    dateFrom.setUTCMonth(+query.month - 1);
    dateFrom.setUTCDate(1);

    const dateTo = new Date(dateFrom);
    dateTo.setUTCMonth(dateTo.getUTCMonth() + 1);

    const master = await this.masterProfileService.findExists({
      where: {
        id: masterId,
      },
      include: {
        weeklySchedule: true,
        schedules: {
          where: {
            date: {
              gte: dateFrom,
              lte: dateTo,
            },
          },
        },
      },
    });

    const calendar: ({
      date: number;
      dayOff: boolean;
      startAt: string | null;
      endAt: string | null;
    } | null)[][] = [];

    let weekI = 0;

    // Fill up the days that not belongs to the month
    calendar.push([]);

    for (let i = 0; i < getDayStartsFromMonday(dateFrom); i++) {
      calendar[0].push(null);
    }

    while (dateFrom.getUTCMonth() < +query.month) {
      const calendarDate = dateFrom.getUTCDate();
      const calendarDay = getDayStartsFromMonday(dateFrom);

      // Check if there is no a schedule to the day
      const schedule = master.schedules.find(
        (i) => i.date.getUTCDate() === calendarDate,
      );

      if (schedule) {
        calendar[weekI].push({
          date: dateFrom.getUTCDate(),
          dayOff: schedule.dayOff,
          startAt: schedule.startAt ? schedule.startAt.toISOString() : null,
          endAt: schedule.endAt ? schedule.endAt.toISOString() : null,
        });
      } else {
        calendar[weekI].push({
          date: dateFrom.getUTCDate(),
          dayOff: !master.weeklySchedule[weekDays[calendarDay]],
          startAt: master.weeklySchedule.startAt
            ? master.weeklySchedule.startAt.toISOString()
            : null,
          endAt: master.weeklySchedule.endAt
            ? master.weeklySchedule.endAt.toISOString()
            : null,
        });
      }

      if (getDayStartsFromMonday(dateFrom) === 6) {
        weekI++;
        calendar.push([]);
      }

      dateFrom.setUTCDate(dateFrom.getUTCDate() + 1);
    }

    // Fill up the rest of the days
    const lastWeekInCalendarI = calendar.length - 1;
    const theRestOfTheDays = 7 - calendar[calendar.length - 1].length;

    for (let i = 0; i < theRestOfTheDays; i++) {
      calendar[lastWeekInCalendarI].push(null);
    }

    return {
      month: +query.month,
      year: +query.year,
      calendar,
    };
  }

  async findExists<T extends Prisma.Prisma.MasterScheduleFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterScheduleFindFirstArgs
    >,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.masterSchedule.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Master schedule not exists');
    }

    return candidate;
  }
}
