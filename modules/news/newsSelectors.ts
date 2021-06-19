import { RootState } from "../../core/redux/store";
import { generateNews, searchItems } from "../../core/helpers";

export const newsListSelector = (state: RootState) => {
  let news = state.news.news ? Object.values(state.news.news) : [];

  if (news?.length && state.news.search) {
    news = searchItems(news, state.news.search, "headline");
  }

  return generateNews(news);
};
export const newsListStatus = (state: RootState) => state.news.status;

export const newsSearchString = (state: RootState) => state.news.search;
