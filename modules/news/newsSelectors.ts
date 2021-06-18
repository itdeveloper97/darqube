import { RootState } from "../../core/redux/store";

export const newsListSelector = (state: RootState) => {
  const news = state.news.news ? Object.values(state.news.news) : [];

  return {
    latestNews: news.length ? news[0] : null,
    news: news.length ? news.slice(1).filter((item, index) => index < 6 && item) : null,
  };
};
export const newsListStatus = (state: RootState) => state.news.status;
