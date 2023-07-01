export const isCurrentWeek = (date: string) => {
  const currentDate = new Date(),
    mondayDate =
      currentDate.getUTCDay() !== 0
        ? currentDate.getUTCDate() - currentDate.getUTCDay() + 1
        : currentDate.getUTCDate() - 6,
    monday = new Date(currentDate.setUTCDate(mondayDate));
  monday.setUTCHours(0, 0, 0, 0);

  return new Date(date) > new Date(monday);
};
