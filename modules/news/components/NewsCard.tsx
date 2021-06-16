import styled, { css } from "styled-components";
import { deviceSize } from "../../../assets/theme/device";
import { NewsResponse } from "../../../pages/api/dto/News";
import {timestampToDate} from "../../../core/helpers";

interface IProps {
  latestNews?: boolean;
  news: NewsResponse | null;
}

export const NewsCard = ({ latestNews, news }: IProps) => {
  return (
    <Card
      href={news?.url}
      latestNews={latestNews}
      target={"_blank"}
    >
      <Image
      alt={news?.summary} src={news?.image}
      />
      <Content>
        <ContentHeader>
          <Related>{news?.related}</Related>
          {latestNews && <LatestMark>{"Latest news"}</LatestMark>}
        </ContentHeader>
        <ContentFooter>
          <Headline>{news?.headline}</Headline>
          <Summary>{news?.summary}</Summary>
          <CardNav>
            <Info>
              {/*Todo*/}
              {/*<Timestamp>{timestampToDate(news?.datetime}</Timestamp>*/}
              <Divider>{"|"}</Divider>
              <Source>{news?.source}</Source>
            </Info>

              //Todo Bookmark
          </CardNav>
        </ContentFooter>
      </Content>
    </Card>
  );
};

const Card = styled.a<{ latestNews?: boolean }>`
  position: relative;
  height: 425px;
  ${({ latestNews }) =>
    latestNews &&
    css`
      width: 100%;
      max-width: 380px;
      height: 500px;
      @media screen and ${deviceSize.laptopL} {
        max-width: 478px;
        height: 628px;
      }
    `}
  & > * {
    border-radius: 6px;
  }
  &:hover {
    opacity: 0.9;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
  background: linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141b 75.5%);
  padding: 25px;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Related = styled.span`
  font-size: 10px;
  border: 1px solid var(--white);
  border-radius: 30px;
  padding: 5px 15px;
`;

const LatestMark = styled.span`
  font-weight: bold;
  font-size: 8px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 8px;
  background-color: var(--red);
  align-self: center;
`;

const ContentFooter = styled.div``;

const Headline = styled.div`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`;

const Summary = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 18px;
  max-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.5;
`;

const CardNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: calc(100% - 12px);
`;

const Timestamp = styled.span`
  font-size: 12px;
  margin-right: 17px;
  opacity: 0.75;
`;

const Divider = styled.span`
  opacity: 0.35;
  margin-right: 17px;
`;

const Source = styled.div`
  max-width: calc(100% - 90px);
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 12px;
  opacity: 0.35;
`;

const Bookmark = styled.i`
  height: 12px;
  width: 12px;
  min-width: 12px;
  align-self: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
