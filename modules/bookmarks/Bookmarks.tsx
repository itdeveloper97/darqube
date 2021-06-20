import React, { useCallback, useMemo } from "react";
import { NewsList, NewsWrapper } from "../../components/common/NewsList";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarksListSelector,
  bookmarksPaginationState,
} from "./bookmarksSelectos";
import { NewsCard } from "../news/components/NewsCard";
import { CustomPagination } from "../../components/CustomPagination";
import styled from "styled-components";
import { paginationBookmarksAction } from "./bookmarksSlice";

export function Bookmarks() {
  const dispatch = useDispatch();
  const { latestNews, news, pageCount } = useSelector(bookmarksListSelector);
  const paginationState = useSelector(bookmarksPaginationState);

  const newsList = useMemo(
    () => news?.map((item) => <NewsCard key={item.id} news={item} />),
    [news]
  );

  const onPaginationChange = useCallback(
    ({ currentPage, pageSize }) => {
      dispatch(paginationBookmarksAction({ currentPage, pageSize }));
    },
    [dispatch]
  );

  return (
    <>
      <NewsWrapper>
        {latestNews && <NewsCard latestNews={true} news={latestNews} />}
        <NewsList>{newsList}</NewsList>
      </NewsWrapper>
      <PaginationWrapper>
        <CustomPagination
          pageCount={pageCount}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          previousLabel={"<"}
          nextLabel={">"}
          onChange={onPaginationChange}
          pageSizes={[6, 12]}
          initialState={paginationState}
        />
      </PaginationWrapper>
    </>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
