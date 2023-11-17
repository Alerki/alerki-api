import { BadRequestException } from '@nestjs/common';

export interface DateRangeI {
  from: Date;
  to: Date;
}

export function checkIfStartTimeLessThanEnd(start: Date, end: Date) {
  if (start > end) {
    throw new BadRequestException('Start time should be less than end');
  }
}

export function checkIfStartTimeLessThanEndAsString(
  start: string,
  end: string,
) {
  const startTime = new Date(start);
  const checkStartTime = new Date(0);
  checkStartTime.setUTCHours(startTime.getUTCHours());
  checkStartTime.setUTCMinutes(startTime.getUTCMinutes());
  checkStartTime.setUTCSeconds(startTime.getUTCSeconds());

  const endTime = new Date(end);
  const checkEndTime = new Date(0);
  checkEndTime.setUTCHours(endTime.getUTCHours());
  checkEndTime.setUTCMinutes(endTime.getUTCMinutes());
  checkEndTime.setUTCSeconds(endTime.getUTCSeconds());

  if (checkStartTime > checkEndTime) {
    throw new BadRequestException('Start time should be less than end');
  }

  return {
    startAt: checkStartTime,
    endAt: checkEndTime,
  };
}

export function setTime0(date: Date) {
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
}

export function createTime0(date: Date) {
  const newDate = new Date(date);

  newDate.setUTCDate(0);
  newDate.setUTCHours(0);
  newDate.setUTCMinutes(0);
  newDate.setUTCSeconds(0);
  newDate.setUTCMilliseconds(0);

  return newDate;
}

export function setDate0(date: Date) {
  date.setUTCFullYear(1970);
  date.setUTCMonth(0);
  date.setUTCDate(1);
}

export function createDate0(date: Date) {
  const newDate = new Date(date);

  newDate.setUTCFullYear(1970);
  newDate.setUTCMonth(0);
  newDate.setUTCDate(1);

  return newDate;
}

export function getDayStartsFromMonday(date: Date) {
  // Convert Sunday (0) to 6
  if (date.getUTCDay() === 0) {
    return 6;
  } else {
    return date.getUTCDay() - 1;
  }
}

export function mergeTime(date: Date, time: Date) {
  date.setUTCHours(time.getUTCHours());
  date.setUTCMinutes(time.getUTCMinutes());
  date.setUTCSeconds(time.getUTCSeconds());
  date.setUTCMilliseconds(time.getUTCMilliseconds());
}

export function mergeDate(date: Date, merge: Date) {
  date.setUTCFullYear(merge.getUTCFullYear());
  date.setUTCMonth(merge.getUTCMonth());
  date.setUTCDate(merge.getUTCDate());
}

export function createOneDayDateRange(date: Date) {
  const dateFrom = new Date(date);
  setTime0(dateFrom);

  const dateTo = new Date(dateFrom);
  dateTo.setUTCDate(dateTo.getUTCDate() + 1);

  return {
    dateFrom,
    dateTo,
  };
}

export function isDateInRange(
  date: Date,
  dateFrom: Date,
  dateTo: Date,
): boolean {
  return date < dateFrom || date > dateTo;
}

export function isCollision(xRange: DateRangeI, yRange: DateRangeI) {
  return !(xRange.to <= yRange.from || xRange.from >= yRange.to);
}

export function isDatesInRange(checkDates: DateRangeI, limitRange: DateRangeI) {
  return (
    createDate0(checkDates.from) >= createDate0(limitRange.from) &&
    createDate0(checkDates.to) <= createDate0(limitRange.to)
  );
}
