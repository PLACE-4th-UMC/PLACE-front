import React from "react";
import styled from "styled-components";
import MainStoryFavoriteContent from "./MainStoryFavoriteContent";

const StoryWrapper = styled.div`
  height: 34rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 5rem;
`;

const StoryTitleWrapper = styled.div`
  height: 12.75rem;
`;

const StoryTitleWrapperH1 = styled.h1`
  height: 6.5rem;
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  color: #484848;
  display: grid;
  justify-items: start;

  &::after {
    content: "";
    display: block;
    width: 140px;
    border-bottom: 6px solid #484848;
    margin-top: 1.5rem;
    border-radius: 3px;
  }
`;

const StoryTitleWrapperMap = styled.div`
  display: grid;
  justify-items: end;
`;

const StoryTitleWrapperMapImg = styled.img`
  height: auto;
  width: auto;
`;

const StoryContent = styled.div`
  height: 21.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.88rem;
`;

function MainStoryFavorite({ text }: any) {
  const ExhibitionData = [
    {
      id: 1,
      background: "/Images/Home/story_one.png",

      name: "Flower",
      location: "용산구",
    },
    {
      id: 2,
      background: "/Images/Home/story_two.png",

      name: "시간 여행",
      location: "강남구",
    },
    {
      id: 3,
      background: "/Images/Home/story_three.png",
      name: "Walk",
      location: "마포구",
    },
    {
      id: 4,
      background: "/Images/Home/제리.jpg",
      name: "인체의 신비",
      location: "종로구",
    },
  ];

  return (
    <StoryWrapper>
      <StoryTitleWrapper>
        <StoryTitleWrapperH1>
          {text}
          <br />
          스토리 모아보기
        </StoryTitleWrapperH1>
        <StoryTitleWrapperMap>
          <StoryTitleWrapperMapImg src="/Images/Home/map_btn.png" />
        </StoryTitleWrapperMap>
      </StoryTitleWrapper>
      <StoryContent>
        {ExhibitionData.map((exhibition) => (
          <MainStoryFavoriteContent
            background={exhibition.background}
            name={exhibition.name}
            location={exhibition.location}
          />
        ))}
      </StoryContent>
    </StoryWrapper>
  );
}

export default MainStoryFavorite;
