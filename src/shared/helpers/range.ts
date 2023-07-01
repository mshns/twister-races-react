export const range = (start: number, end: number) => {
  const array = [];
  while (start <= end) {
    array.push(start);
    start++;
  }
  return array;
};
