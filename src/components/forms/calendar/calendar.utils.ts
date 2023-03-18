/* eslint-disable no-plusplus */
import { DAYS_IN_MONTH, DAYS_IN_WEEK, FEBRUARY_NUMBER, WEEK_DAYS_FROM_MONDAY } from './const';

export const isLeapYear = (year: number) => !(year % 4 || (!(year % 100) && year % 400));

export const getDaysCountInMonth = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === FEBRUARY_NUMBER) {
    return daysInMonth + 1;
  }

  return daysInMonth;
};

export const getDayOfWeek = (date: Date) => {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
};

export const getMonthDataWithPrevAndNext = (year: number, month: number): Date[][] | undefined[][] => {
  const result: Date[][] | undefined[][] = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysCountInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if (i === 0 && j < monthStartsOn) {
        result[i][j] = undefined;
      } else if (day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  let prevMonthDays = getDaysCountInMonth(new Date(year, month - 1));

  for (let day = DAYS_IN_WEEK - 1; day >= 0; day--) {
    if (!result[0][day]) {
      result[0][day] = new Date(year, month - 1, prevMonthDays--);
    }
  }

  const lastRow = result.length - 1;
  let nextMonthDays = 1;

  for (let day = 0; day < DAYS_IN_WEEK; day++) {
    if (!result[lastRow][day]) {
      result[lastRow][day] = new Date(year, month + 1, nextMonthDays++);
    }
  }

  return result;
};

export const getNextDayForOrder = (date: Date) => {
  if (date.getDay() === 5) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3);
  }
  if (date.getDay() === 6) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
  }
  if (date.getDay() === 0) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};

export const areEqualDates = (a: Date, b: Date) => {
  if (!a || !b) return false;

  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
};

export const getDateWithCurrentTimeZone = (selectedDate: Date) => {
  const date = Number(selectedDate) - new Date().getTimezoneOffset() * 60 * 3 * 1000;

  return new Date(date).toISOString();
};
