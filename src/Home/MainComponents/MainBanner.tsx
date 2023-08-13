import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 34.125rem;
  flex-shrink: 0;
  background-image: url("Images/Home/banner_img.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const InnerWrapper = styled.div`
  display: grid;
  row-gap: 2.38rem;
  padding-top: 9rem;
`;

const InnerWrapperTitle = styled.h1`
  text-align: center;
  margin: 0;
  color: #484848;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 2.5rem;
  font-style: normal;
  height: 3.4375rem;
`;

const InnerWrapperContent = styled.div`
  background-color: #ffffff;
  border-radius: 2.1875rem;
  margin: 0 auto;
  height: 4.375rem;
  width: 30.9375rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
`;

const InnerWrapperContentWrapper = styled.div``;

const Location = styled.p`
  margin: 0;
  padding-left: 1.88rem;
  color: #484848;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;
`;

const Setting = styled.p`
  margin: 0;
  padding-left: 1.94rem;
  display: grid;
  align-self: start;
  color: #c2c6cc;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InnerWrapperContentImg = styled.img`
  width: 3.375rem;
  height: 3.375rem;
  place-self: center;
`;

function MainBanner() {
  return (
    <BannerWrapper>
      <InnerWrapper>
        <InnerWrapperTitle>VISIT YOUR EXHIBIT</InnerWrapperTitle>
        <InnerWrapperContent>
          <InnerWrapperContentWrapper>
            <Location>Location</Location>
            <Setting>선호하는 도시 설정</Setting>
          </InnerWrapperContentWrapper>
          <InnerWrapperContentImg src="/Images/Home/search.png" />
        </InnerWrapperContent>
      </InnerWrapper>
    </BannerWrapper>
  );
}

export default MainBanner;
