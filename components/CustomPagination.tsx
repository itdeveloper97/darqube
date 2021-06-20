import React, { useEffect, useMemo, useState } from "react";
import Pagination, { ReactPaginateProps } from "react-paginate";
import styled from "styled-components";
import { SelectArrow } from "./common/svg/SelectArrow";

interface IPaginationState {
  currentPage: number;
  pageSize: number;
}

interface IProps
  extends Omit<
    ReactPaginateProps,
    | "nextClassName"
    | "previousClassName"
    | "containerClassName"
    | "activeClassName"
    | "onPageChange"
  > {
  onChange?: ({ currentPage, pageSize }: IPaginationState) => void;
  initialState?: IPaginationState;
  pageSizes: number[];
}

export const CustomPagination = ({
  onChange,
  initialState = { currentPage: 0, pageSize: 6 },
  pageSizes,
  ...rest
}: IProps) => {
  console.log(initialState);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [state, setState] = useState(initialState);
  const onPageSizeChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      pageSize: Number(e.target.value),
    }));
  };
  const onPageChange = ({ selected }) => {
    setState((prevState) => ({ ...prevState, currentPage: selected }));
  };

  useEffect(() => {
    if (!isFirstRender && onChange) {
      onChange({ ...state });
    }
  }, [state]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const pageOptions = useMemo(
    () =>
      pageSizes.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      )),
    [pageSizes]
  );

  return (
    <Container>
      <Show>
        <Label>Show</Label>
        <SelectWrapper>
          <Select defaultValue={state.pageSize} onChange={onPageSizeChange}>
            {pageOptions}
          </Select>
          <SelectArrow />
        </SelectWrapper>
      </Show>
      <Pagination
        initialPage={state.currentPage}
        {...rest}
        containerClassName={"pagination"}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 355px;
  height: 100px;
  background: rgba(36, 37, 37, 0.5);
  border: 3px solid #3d3d3d;
  box-sizing: border-box;
  border-radius: 30px;
  .pagination {
    margin-right: 45px;
    list-style: none;
    display: flex;
    flex: auto;
    justify-content: space-between;

    .next,
    .previous {
      background-color: #d6d6d6;
      color: black;
      a {
        opacity: 1;
      }
    }

    .next.disabled,
    .previous.disabled {
      opacity: 0.2;
      background-color: #3c3c3c;
    }

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        opacity: 0.5;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .selected {
      background-color: #d6d6d6;
      a {
        color: black;
        opacity: 1;
      }
    }
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: #ffffff;
  opacity: 0.25;
  margin-right: 10px;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    pointer-events: none;
    position: absolute;
    margin-right: 5px;
  }
`;

const Select = styled.select`
  background-color: #191818;
  color: white;
  border: none;
  height: 30px;
  width: 60px;
  padding-left: 10px;
  appearance: none;
`;

const Show = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
