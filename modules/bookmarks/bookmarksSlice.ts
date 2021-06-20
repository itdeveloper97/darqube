import { createSlice } from "@reduxjs/toolkit";
import { addInBookmark, IInitialPropsNews, INews } from "../news/newsSlice";

const initialState: Omit<IInitialPropsNews, "status" | "error"> = {
  news: null,
  search: null,
  pagination: {
    currentPage: 0,
    pageSize: 6,
  },
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    search(state, { payload }) {
      state.search = payload;
    },
    pagination(state, { payload }) {
      state.pagination = { ...payload };
    },
  },
  extraReducers: {
    [addInBookmark.type]: (state, { payload }) => {
      if (state.news) {
        if (payload.id in state.news) {
          delete state.news[payload.id];
        } else {
          state.news = {
            ...state.news,
            [payload.id]: { ...payload, bookmark: true },
          } as INews[];
        }
        if (!Object.keys(state.news).length) {
          state.news = null;
        }
      } else {
        state.news = {
          [payload.id]: { ...payload, bookmark: true },
        } as INews[];
      }
    },
  },
});

export const {
  search: searchBookmarksAction,
  pagination: paginationBookmarksAction,
} = bookmarksSlice.actions;
