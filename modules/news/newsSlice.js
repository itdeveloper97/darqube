import {createSlice} from "@reduxjs/toolkit";
import {getNews} from "./newsActions";

const initialState = {
  status: null,
  news: [],
  error: null
}


export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending.type]: (state) => {
      return {}
    },
    [getNews.fulfilled.type]: (state, {payload}) => {
      state.news = payload
    },
    [getNews.rejected.type]: () => {
      return {}
    },
  }
})