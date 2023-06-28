export const isCurrentWeek = (date: string) => {
  const currentDate = new Date(),
    mondayDate = currentDate.getDate() - currentDate.getDay() + 1,
    monday = new Date(currentDate.setDate(mondayDate));

  return new Date(date) > new Date(monday);
};
