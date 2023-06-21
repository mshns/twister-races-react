export const isCurrentWeek = (date: string) => {
  const currentDay = new Date().getUTCDay() === 0 ? 7 : new Date().getUTCDay(),
    dateDay = new Date(date).getUTCDay() === 0 ? 7 : new Date(date).getUTCDay(),
    delta = new Date().getTime() - new Date(date).getTime(),
    weekMilliseconds = 7 * 24 * 60 * 60 * 1000;

  return currentDay >= dateDay && delta <= weekMilliseconds;
};
