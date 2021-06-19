import { RootState } from "../../core/redux/store";

export const bookmarksListSelector = (state: RootState) => {
  const bookmarks = state.bookmarks.news ? Object.values(state.bookmarks.news) : [];

  return {
    latestNews: bookmarks.length ? bookmarks[0] : null,
    news: bookmarks.length
      ? bookmarks.slice(1).filter((item, index) => index < 6 && item)
      : null,
  };
};
