import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainStoryContent from "./MainStoryContent";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
`;

function MainStoryRecent({ text }: any) {
  const [story, setStory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://exhibition-place.site/home/userRecent`
        );
        console.log(response.data);
        console.log(response.data.result);
        console.log(response.data.result.userRecentLists);
        setStory(response.data.result.userRecentLists);
        console.log(story);
      } catch (error: any) {
        console.log("fetch error", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (!story) return null;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const handleLike = (like: boolean) => {
    like = !like;
  };

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
      <Slider {...settings}>
        {story.map((story) => (
          <MainStoryContent
            key={story.artist}
            login={true}
            islike={story.isLike}
            onclick={() => {
              story.isLike = !story.isLike;
            }}
            background={story.exhibitionImg}
            img={story.userImg}
            user={story.artist}
            location={story.location}
          />
        ))}
      </Slider>
    </StoryWrapper>
  );
}

export default MainStoryRecent;
