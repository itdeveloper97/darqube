import { combineReducers } from "@reduxjs/toolkit";
import {newsSlice} from "../../modules/news/newsSlice";

export const rootReducer = combineReducers({
  news: newsSlice.reducer
});

