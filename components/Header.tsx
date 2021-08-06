import styled from "styled-components";
import { ActiveLink } from "./common/ActiveLink";
import { Search } from "./Search";

interface IProps {
  searchAction?: (payload: string) => void;
  searchString?: string;
}

export const Header = ({ searchAction, searchString }: IProps) => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <ActiveLink href={"/"} activeClassName="active">
            <MenuLink className="nav-link">News</MenuLink>
          </ActiveLink>
        </MenuItem>
        <MenuItem>
          <ActiveLink href={"/bookmarks"} activeClassName="active">
            <MenuLink className="nav-link">Bookmarks</MenuLink>
          </ActiveLink>
        </MenuItem>
        <MenuItem>
          <ActiveLink href={"/forex-matrix"} activeClassName="active">
            <MenuLink className="nav-link">Forex Matrix</MenuLink>
          </ActiveLink>
        </MenuItem>
      </Menu>
      {searchAction && (
        <Search searchAction={searchAction} searchString={searchString} />
      )}
    </Container>
  );
};

const Container = styled.header`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
`;

const MenuLink = styled.a`
  color: var(--lightGrey);
  font-weight: bold;
  font-size: 28px;
  text-decoration: none;
  &.active {
    color: var(--white);
  }
  &:hover {
    opacity: 0.9;
  }
`;
