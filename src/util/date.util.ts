import { BadRequestException } from '@nestjs/common';

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
  date.setUTCDate(0);
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
}

export function setDate0(date: Date) {
  date.setUTCFullYear(1970);
  date.setUTCMonth(0);
  date.setUTCDate(1);
}

export function getDayStartsFromMonday(date: Date) {
  // Convert Sunday (0) to 6
  if (date.getUTCDay() === 0) {
    return 6;
  } else {
    return date.getUTCDay() - 1;
  }
}
