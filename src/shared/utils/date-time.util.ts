export function setStartOfTheDay(date: Date) {
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
}

export function setNewStartOfTheDay(date: Date) {
  const newDate = new Date(date);
  setStartOfTheDay(newDate);
  return newDate;
}

export function setEndOfTheDay(date: Date) {
  date.setUTCHours(23);
  date.setUTCMinutes(59);
  date.setUTCSeconds(59);
  date.setUTCMilliseconds(999);
}

export function setNewEndOfTheDay(date: Date) {
  const newDate = new Date(date);
  setEndOfTheDay(newDate);
  return newDate;
}

export function appendDateWithTime(appendDate: Date, date: Date) {
  appendDate.setUTCHours(appendDate.getUTCHours() + date.getUTCHours());
  appendDate.setUTCMinutes(appendDate.getUTCMinutes() + date.getUTCMinutes());
  appendDate.setUTCSeconds(appendDate.getUTCSeconds() + date.getUTCSeconds());
}

export function appendNewDateWithTime(appendDate: Date, date: Date) {
  const newDate = new Date(appendDate);
  appendDateWithTime(newDate, date);
  return newDate;
}

export function generateDatesInTimespan(startAt: Date, endAt: Date) {
  const dates: Array<Date> = [];
  const date = new Date(startAt);
  while (
    setNewStartOfTheDay(date).getTime() <= setNewStartOfTheDay(endAt).getTime()
  ) {
    dates.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return dates;
}

export function checkTimespansForCollision(
  x: { start: Date; end: Date },
  y: { start: Date; end: Date },
) {
  return x.start <= y.end && x.end > y.start;
}

export function checkIfATimeIsPartOfTimespan(
  timespan: { start: Date; end: Date },
  y: Date,
) {
  return timespan.start <= y && y > timespan.end;
}

export function compareDates(dateX: Date, dateY: Date) {
  return (
    dateX.getUTCFullYear() === dateY.getUTCFullYear() &&
    dateX.getUTCMonth() === dateY.getUTCMonth() &&
    dateX.getUTCDate() === dateY.getUTCDate()
  );
}

export function isDateValid(date: Date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (!isNaN(date.getTime())) {
      return true;
    }
  }

  return false;
}
