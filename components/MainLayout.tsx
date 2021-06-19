import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";
import { FC } from "react";

interface IProps {
  title: string;
  searchAction: (payload: string) => void;
  searchString: string;
}

export const MainLayout: FC<IProps> = ({
  children,
  title,
  searchAction,
  searchString,
}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Header searchAction={searchAction} searchString={searchString} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
`;
