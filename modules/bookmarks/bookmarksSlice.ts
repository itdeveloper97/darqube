import { createSlice } from "@reduxjs/toolkit";
import { addInBookmark, IInitialPropsNews, News } from "../news/newsSlice";
import { LoadState } from "../../core/redux/LoadState";

const initialState: Pick<IInitialPropsNews, "news"> = {
  news: null,
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers: {
    [addInBookmark.type]: (state, { payload }) => {
      if (state.news) {
        if (payload.id in state.news) {
          delete state.news[payload.id];
        } else {
          state.news = {
            ...state.news,
            [payload.id]: { ...payload, bookmark: true },
          } as News[];
        }
        if (!Object.keys(state.news).length) {
          state.news = null;
        }
      } else {
        state.news = { [payload.id]: { ...payload, bookmark: true } } as News[];
      }
    },
  },
});
