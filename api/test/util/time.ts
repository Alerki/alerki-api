export const dateToWeekDay = (date: Date) => {
  if (
    date.getUTCDay() === 5 ||
    date.getUTCDay() === 6
  ) {
    date.setUTCDate(date.getUTCDate() - 3);
  }
};

export const dateToWeekend = (date: Date) => {
  while (true) {
    if (
      date.getUTCDay() !== 5 ||
      date.getUTCDay() !== 6
    ) {
      date.setUTCDate(date.getUTCDate() + 1);
    }

    break;
  }
};
