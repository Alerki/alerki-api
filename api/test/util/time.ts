export const dateToWeekDay = (
  date: Date,
  after: boolean = false,
) => {
  if (
    date.getUTCDay() === 5 ||
    date.getUTCDay() === 6
  ) {
    if (after) {
      date.setUTCDate(date.getUTCDate() + 3);
    } else {
      date.setUTCDate(date.getUTCDate() - 3);
    }
  }
};

export const dateToWeekend = (date: Date) => {
  while (true) {
    if (
      date.getUTCDay() !== 0
    ) {
      date.setUTCDate(date.getUTCDate() + 1);
      continue;
    } else {
      break;
    }
  }
};
