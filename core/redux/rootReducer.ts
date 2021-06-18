import { combineReducers } from "@reduxjs/toolkit";
import {newsSlice} from "../../modules/news/newsSlice";
import {bookmarksSlice} from "../../modules/bookmarks/bookmarksSlice";

export const rootReducer = combineReducers({
  news: newsSlice.reducer,
  bookmarks: bookmarksSlice.reducer
});

