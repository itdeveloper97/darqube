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

export const timestampToDate = (timestamp: number | undefined) => {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
};

export const searchItems = <T>(
  items: Array<T>,
  search: string,
  searchField: string
): Array<T> => {
  return items.filter(
    (item) => typeof item === "object" && item[searchField].includes(search)
  );
};

export const generateNews = <T>(
  items: Array<T>,
  pagination: { currentPage: number; pageSize: number }
): { latestNews: T; news: Array<T>; pageCount: number } => {
  const start = pagination.currentPage * pagination.pageSize;
  const end = start + pagination.pageSize;
  return {
    latestNews: items.length ? items[0] : null,
    news: items.length ? items.slice(1).slice(start, end) : null,
    pageCount: Math.ceil(items.length / pagination.pageSize),
  };
};
