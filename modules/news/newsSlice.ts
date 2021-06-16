import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./newsActions";
import { LoadState } from "../../core/redux/LoadState";
import { NewsResponse } from "../../pages/api/dto/News";

interface IInitialProps {
  status: LoadState;
  news: NewsResponse[] | null;
  error: string | null;
}

const initialState: IInitialProps = {
  status: LoadState.needLoad,
  news: null,
  error: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
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
    [getNews.rejected.type]: (state, {payload}) => {
      return {
        ...state,
        error: payload,
        status: LoadState.idle,
      };
    },
  },
});
