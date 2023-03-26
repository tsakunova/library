export const getDateString = (value: number, isDay = false) => {
  const date = isDay ? value : value + 1;

  return date <= 9 ? `0${date}` : date;
};

export const TODAY = new Date().setHours(0, 0, 0, 0);

export const isDayLater = (date: string) => new Date(date).setHours(0, 0, 0, 0) > TODAY;

export const isDayBefore = (date: string) => new Date(date).setHours(0, 0, 0, 0) < TODAY;
