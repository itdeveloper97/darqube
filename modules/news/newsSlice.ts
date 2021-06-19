import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsActions";
import { LoadState } from "../../core/redux/LoadState";
import { NewsResponse } from "../../pages/api/dto/News";

export interface FullNews extends NewsResponse {
  bookmark?: boolean;
}

export interface INews extends FullNews {
  [key: number]: FullNews;
}

export interface IInitialPropsNews {
  status: LoadState;
  news: INews[] | null;
  error: string | null;
}

const initialState: IInitialPropsNews = {
  status: LoadState.needLoad,
  news: null,
  error: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addInBookmark(state, { payload }) {
      state.news[payload.id] = {
        ...state.news[payload.id],
        bookmark: !state.news[payload.id].bookmark,
      };
    },
  },
  extraReducers: {
    [getNews.pending.type]: (state) => {
      return {
        ...state,
        status: LoadState.pending,
      };
    },
    [getNews.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        news: payload,
        status: LoadState.idle,
      };
    },
    [getNews.rejected.type]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        status: LoadState.idle,
      };
    },
  },
});

export const { addInBookmark } = newsSlice.actions;
