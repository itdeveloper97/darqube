import styled from "styled-components";
import {deviceSize} from "../../assets/theme/device";

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > a:first-child {
    margin: 0 0 10px;
  }
  @media screen and ${deviceSize.tablet} {
    flex-direction: row;
    & > a:first-child {
      margin: 0 24px 0 0;
    }
  }
`;

export const NewsList = styled.div`
  display: grid;
  gap: 10px;
  flex: 1;
  @media screen and ${deviceSize.mobileM} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media screen and ${deviceSize.tablet} {
    gap: 18px;
  }
`;