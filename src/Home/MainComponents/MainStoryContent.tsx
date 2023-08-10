import React, { useState } from "react";
import styled from "styled-components";

const StoryContentWrapper = styled.div`
  position: relative;
`;

const StoryContentBackground = styled.img`
  height: 21.25rem;
  width: 13.5rem;
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

const StoryContentAccount = styled.div`
  position: absolute;
  top: 12rem;
  left: 1.31rem;
`;

const StoryContentAccountImg = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
`;

const StoryContentAccountName = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin-top: 0.25rem;
`;

const StoryContentAccountLocation = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  color: #c4c4c4;
  margin-top: 5px;
`;

function MainStoryContent({ background, img, user, location }: any) {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
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
      <StoryContentAccount>
        <StoryContentAccountImg src={img} />
        <StoryContentAccountName>{user}</StoryContentAccountName>
        <StoryContentAccountLocation>{location}</StoryContentAccountLocation>
      </StoryContentAccount>
    </StoryContentWrapper>
  );
}

export default MainStoryContent;
