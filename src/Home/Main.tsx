import { styled } from "styled-components";
import MainBanner from "./MainComponents/MainBanner";
import MainStoryRecent from "./MainComponents/MainStoryRecent";
import MainStoryView from "./MainComponents/MainStoryView";
import MainStoryLike from "./MainComponents/MainStoryLike";

const MainWrapper = styled.main`
  margin-bottom: 9.69rem;
`;

function Main() {
  return (
    <MainWrapper>
      <MainBanner />
      <MainStoryRecent text={"유저들의 최근 전시회"} />
      <MainStoryView text={"유저들이 많이 본 전시회"} />
      <MainStoryLike text={"현재 가장 인기있는 전시회"} />
    </MainWrapper>
  );
}

export default Main;
