const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
};
