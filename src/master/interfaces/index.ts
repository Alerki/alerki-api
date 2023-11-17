export interface CalendarSlotI {
  from: Date;
  to: Date;
}

export interface CalendarDayI {
  date: number;
  dayOff: boolean;
  startAt: string | null;
  endAt: string | null;
}

export type CalendarDaysI = (CalendarDayI | null)[][];

export class CalendarI {
  year: number;
  month: number;
  calendar: CalendarDaysI;
}
