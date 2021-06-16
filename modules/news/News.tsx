import React, { useEffect } from "react";
import { getNews } from "./newsActions";
import { useDispatch, useSelector } from "react-redux";
import { newsListSelector, newsListStatus } from "./newsSelectors";
import { LoadState } from "../../core/redux/LoadState";
import { NewsList, NewsWrapper } from "../../components/common/NewsList";
import { NewsCard } from "./components/NewsCard";

export const News = () => {
  const dispatch = useDispatch();
  const { news, latestNews } = useSelector(newsListSelector);
  const status = useSelector(newsListStatus);
  useEffect(() => {
    !news && dispatch(getNews());
  }, []);

  if (status === LoadState.pending) {
    return <div style={{ color: "white" }}>...loading</div>;
  }

  console.log(news);

  return (
    <NewsWrapper>
      <NewsCard latestNews={true} news={latestNews} />
      <NewsList>
        {news?.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </NewsList>
    </NewsWrapper>
  );
};
