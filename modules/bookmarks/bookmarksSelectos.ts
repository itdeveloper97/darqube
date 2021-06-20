import { RootState } from "../../core/redux/store";
import { generateNews, searchItems } from "../../core/helpers";

export const bookmarksListSelector = (state: RootState) => {
  let bookmarks = state.bookmarks.news
    ? Object.values(state.bookmarks.news)
    : [];

  if (bookmarks?.length && state.bookmarks.search) {
    bookmarks = searchItems(bookmarks, state.bookmarks.search, "headline");
  }

  return generateNews(bookmarks, state.bookmarks.pagination);
};

export const bookmarksSearchString = (state: RootState) =>
  state.bookmarks.search;
