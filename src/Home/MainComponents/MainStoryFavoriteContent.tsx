import React, { useState } from "react";
import styled from "styled-components";

const StoryContentWrapper = styled.div`
  height: 21.25rem;
  width: 13.5rem;
  position: relative;
`;

const StoryContentBackground = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const StoryContentHeart = styled.div``;

const StoryContentHeartImg = styled.img`
  width: 1.63306rem;
  height: 1.42438rem;
  z-index: 100;
  position: absolute;
  top: 1.37rem;
  right: 1.18rem;
  cursor: pointer;
`;

const StoryContentExhibit = styled.div`
  position: absolute;
  top: 16.62rem;
  left: 1.31rem;
`;

const StoryContentExhibitName = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin-top: 7px;
`;

const StoryContentLocation = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  color: #c4c4c4;
  margin-top: 5px;
`;

function MainStoryFavoriteContent({ background, name, location }: any) {
  const [like, setLike] = useState(false);

  const toggleLike = async function () {
    setLike(!like);
  };

  return (
    <StoryContentWrapper>
      <StoryContentBackground src={background} />
      <StoryContentHeart>
        <StoryContentHeartImg
          src={like ? "/Images/Home/heart_full.png" : "/Images/Home/heart.png"}
          onClick={toggleLike}
        />
      </StoryContentHeart>
      <StoryContentExhibit>
        <StoryContentExhibitName>{name}</StoryContentExhibitName>
        <StoryContentLocation>{location}</StoryContentLocation>
      </StoryContentExhibit>
    </StoryContentWrapper>
  );
}

export default MainStoryFavoriteContent;
