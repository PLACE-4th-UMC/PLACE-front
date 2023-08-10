import MainBanner from "./MainComponents/MainBanner";
import MainStory from "./MainComponents/MainStory";
import MainStoryFavorite from "./MainComponents/MainStoryFavorite";
import MainStorySlide from "./MainComponents/MainStorySlide";

function Main() {
  return (
    <main>
      <MainBanner />
      <MainStory text={"유저들의 최근 전시회"} />
      <MainStorySlide text={"유저들의 최근 전시회 슬라이드"} />
      <MainStory text={"유저들이 많이 본 전시회"} />
      <MainStoryFavorite text={"현재 가장 인기있는 전시회"} />
    </main>
  );
}

export default Main;
