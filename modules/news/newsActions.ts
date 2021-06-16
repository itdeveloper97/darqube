import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "../../pages/api/baseApi";

export const getNews = createAsyncThunk("news/getNews", async (_, thunkAPI) => {
  try {
    return await baseApi.getNews().then((res) => res);
  } catch (err) {
    return thunkAPI.rejectWithValue("Invalid operation: " + err);
  }
});
