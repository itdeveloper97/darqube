import React, { useMemo } from "react";
import { NewsList, NewsWrapper } from "../../components/common/NewsList";
import { useSelector } from "react-redux";
import { bookmarksListSelector } from "./bookmarksSelectos";
import { NewsCard } from "../news/components/NewsCard";

export function Bookmarks() {
  const { latestNews, news } = useSelector(bookmarksListSelector);

  const newsList = useMemo(
    () => news?.map((item) => <NewsCard key={item.id} news={item} />),
    [news]
  );

  return (
    <NewsWrapper>
      {latestNews && <NewsCard latestNews={true} news={latestNews} />}
      <NewsList>{newsList}</NewsList>
    </NewsWrapper>
  );
}
