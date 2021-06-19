import React, { useCallback, useEffect, useMemo } from "react";
import { getNews } from "./newsActions";
import { useDispatch, useSelector } from "react-redux";
import { newsListSelector, newsListStatus } from "./newsSelectors";
import { LoadState } from "../../core/redux/LoadState";
import { NewsList, NewsWrapper } from "../../components/common/NewsList";
import { NewsCard } from "./components/NewsCard";
import { addInBookmark, INews } from "./newsSlice";
import { CustomPagination } from "../../components/CustomPagination";
import styled from "styled-components";

export function News() {
  const dispatch = useDispatch();
  const { news, latestNews } = useSelector(newsListSelector);
  const status = useSelector(newsListStatus);

  useEffect(() => {
    !news && dispatch(getNews());
  }, []);

  const handleBookmarkClick = useCallback(
    (news: INews) => {
      dispatch(addInBookmark(news));
    },
    [dispatch, addInBookmark]
  );

  const newsList = useMemo(
    () =>
      news?.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
          handleBookmarkClick={handleBookmarkClick}
        />
      )),
    [news]
  );

  return (
    <>
      {status === LoadState.pending ? (
        <div style={{ color: "white" }}>...loading</div>
      ) : (
        <>
          <NewsWrapper>
            {latestNews && (
              <NewsCard
                latestNews={true}
                news={latestNews}
                handleBookmarkClick={handleBookmarkClick}
              />
            )}
            <NewsList>{newsList}</NewsList>
          </NewsWrapper>
          <PaginationWrapper>
            <CustomPagination
              pageCount={20}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              previousLabel={"<"}
              nextLabel={">"}
            />
          </PaginationWrapper>
        </>
      )}
    </>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
