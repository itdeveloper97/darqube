import {baseFetch} from "./baseFetch";

const getNews = async () => {
  return await baseFetch({
    url: "company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg",
    method: "GET",
  });
};

export const baseApi = { getNews };
