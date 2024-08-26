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
