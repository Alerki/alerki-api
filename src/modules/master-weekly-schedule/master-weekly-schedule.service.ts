import { Injectable } from '@nestjs/common';
import { MasterWeeklySchedule } from '@prisma/client';

import { LIST_OF_WEEK_DAYS } from '../../shared/data/date.data';

@Injectable()
export class MasterWeeklyScheduleService {
  checkIfDayIsWorkDayFromWeeklySchedule(
    weeklySchedule: MasterWeeklySchedule,
    date: Date,
  ) {
    return (
      (weeklySchedule?.[LIST_OF_WEEK_DAYS[date.getUTCDay() - 1]] as boolean) ||
      false
    );
  }
}
