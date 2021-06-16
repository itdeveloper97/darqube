import React from "react";
import { useEffect } from "react";
import { getNews } from "./newsActions";
import {useDispatch, useSelector} from "react-redux";

export const News = () => {
  const dispatch = useDispatch();
  const {news} = useSelector(state => state.news)
  console.log("news => ", news)
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return <div>News</div>;
};

