import React, { useEffect, useMemo } from "react";
import { getNews } from "./newsActions";
import { useDispatch, useSelector } from "react-redux";
import { newsListSelector, newsListStatus } from "./newsSelectors";
import { LoadState } from "../../core/redux/LoadState";
import { NewsList, NewsWrapper } from "../../components/common/NewsList";
import { NewsCard } from "./components/NewsCard";

export function News() {
  const dispatch = useDispatch();
  const { news, latestNews } = useSelector(newsListSelector);
  const status = useSelector(newsListStatus);

  useEffect(() => {
    !news && dispatch(getNews());
  }, []);

  const newsList = useMemo(
    () => news?.map((item) => <NewsCard key={item.id} news={item} />),
    [news]
  );

  return (
    <>
      {status === LoadState.pending ? (
        <div style={{ color: "white" }}>...loading</div>
      ) : (
        <NewsWrapper>
          <NewsCard latestNews={true} news={latestNews} />
          <NewsList>{newsList}</NewsList>
        </NewsWrapper>
      )}
    </>
  );
}
