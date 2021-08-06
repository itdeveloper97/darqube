import React, { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { SearchIcon } from "./common/svg/Search";
import { useDispatch } from "react-redux";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  searchAction: (payload: string) => void;
  searchString?: string;
}

export const Search = ({
  searchAction,
  searchString = "",
  ...rest
}: IProps) => {
  const [search, setSearch] = useState(searchString);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== null && searchAction) {
      dispatch(searchAction(search));
    }
  }, [search]);

  const onSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  return (
    <Container>
      <SearchIcon />
      <SearchWrapper
        placeholder={"Search"}
        {...rest}
        onChange={onSearch}
        value={search ? search : ""}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    pointer-events: none;
    position: absolute;
    margin-left: 10px;
  }
`;

const SearchWrapper = styled.input`
  width: 162px;
  height: 30px;
  color: var(--white);
  font-size: 12px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px 10px 10px 30px;
  background: var(--darkGrey) no-repeat left 10px center;
  &::placeholder {
    color: var(--lightGrey);
  }
`;
