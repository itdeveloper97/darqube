import { RootState } from "../../core/redux/store";

export const newsListSelector = (state: RootState) => {
  return {
    latestNews: state.news.news ? state.news.news[0] : null,
    news: state.news.news ? state.news.news.slice(1).filter((item, index) => index < 6 && item) : null,
  };
};
export const newsListStatus = (state: RootState) => state.news.status;
