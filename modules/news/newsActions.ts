import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "../../pages/api/baseApi";
import { News } from "./newsSlice";
import { NewsResponse } from "../../pages/api/dto/News";

export const getNews = createAsyncThunk("news/getNews", async (_, thunkAPI) => {
  try {
    return await baseApi.getNews().then((res) =>
      res.reduce((acc: News, item: NewsResponse) => {
        acc[item.id] = {
          ...item,
          bookmark: false
        };
        return acc;
      })
    );
  } catch (err) {
    return thunkAPI.rejectWithValue("Invalid operation: " + err);
  }
});
