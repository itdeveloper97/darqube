import styled from "styled-components";
import Head from "next/head";
import {Header} from "./Header";
import {FC} from "react";

export const MainLayout: FC = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>news</title>
      </Head>
      <Header />
      {children}
      <footer></footer>
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