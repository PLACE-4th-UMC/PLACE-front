import { styled } from "styled-components";
import MainBanner from "./MainComponents/MainBanner";
import MainStory from "./MainComponents/MainStory";
import MainStoryFavorite from "./MainComponents/MainStoryFavorite";

const MainWrapper = styled.main`
  margin-bottom: 9.69rem;
`;

function Main() {
  return (
    <MainWrapper>
      <MainBanner />
      <MainStory text={"유저들의 최근 전시회"} />
      <MainStory text={"유저들이 많이 본 전시회"} />
      <MainStoryFavorite text={"현재 가장 인기있는 전시회"} />
    </MainWrapper>
  );
}

export default Main;
