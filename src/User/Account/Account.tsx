import React from 'react'
import styled from 'styled-components'
import Header from '../../Header';
import Footer from '../../Footer';

const AccountContainer = styled.div`
  display: flex;
`;

// 사이드 박스

const SideBox = styled.div`
  margin: 5.5rem 4.37rem 0 4.75rem;
  width: 17.4375rem;
  height: 27.9375rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AccountProfileImage = styled.img`
  margin: 2rem 4rem 0 4rem;
  width: 9.4375rem;
  height: 9.4375rem;
`;

const SideBoxName = styled.p`
  margin: 2.5rem auto 0 3.19rem;
  height: 2.75rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SideBoxCountry = styled.p`
  margin: 1.25rem auto 0 3.12rem;
  height: 1.25rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SideBoxDate = styled.p`
  margin: 0 auto 0 3.12rem;
  height: 1.25rem;
  color: #9A9A9A;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const EditProfileBtn = styled.button`
  margin: 2.37rem 0 2.31rem 0;
  width: 8.3125rem;
  height: 2.8125rem;
  border-radius: 0.375rem;
  border: 1px solid #C2C6CC;
  background: #FFF;
  
  color: #484848;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 메인 컨텐츠

const MainContents = styled.div`
  margin: 0 4.05rem 0 0;
`;

const AccountTitle = styled.p`
  margin-top: 8.31rem;
  height: 2.75rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  span{
    color: #E52A2A;
  }
`;

const LogoutBtn = styled.button`
  margin: 0 15rem 0 auto;
  display: flex;
  height: 1.25rem;
  color: #484848;
  text-align: center;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
`;

const LayoutLine = styled.div`
  margin-top: 1.25rem;
  width: calc(100% - 15rem);
  height: 0.125rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #C4C4C4;
`;

const StoryNumber = styled.p`
  height: 1.25rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StoryContainer = styled.div`
`;

const StoryImage = styled.img`
  width: 12.36244rem;
  height: 15.06531rem;
  margin: 0 1.33rem 0 0;
`;

const StoryTitle = styled.p`
  
`;

const StoryText = styled.p`
  
`;

function Account() {
  return (
    <div>
      <Header/>
      <AccountContainer>
        <SideBox>
          <AccountProfileImage src='/Images/User/Account/accountProfile.png' alt='프로필'/>
          <SideBoxName>junyeeee</SideBoxName>
          <SideBoxCountry>South Korea</SideBoxCountry>
          <SideBoxDate>Joined in 2021</SideBoxDate>
          <EditProfileBtn>Edit Profile</EditProfileBtn>
        </SideBox>
        <MainContents>
          <AccountTitle>Hello, junyeeee<span>.</span></AccountTitle>
          <LogoutBtn>Log out</LogoutBtn>
          <LayoutLine/>
          <StoryNumber>7 Stories</StoryNumber>
          <StoryContainer>
            <StoryImage/>
            <StoryImage/>
            <StoryImage/>
            <StoryImage/>
            <StoryImage/>
            <StoryImage/>
            <StoryImage/>
          </StoryContainer>
        </MainContents>
      </AccountContainer>
      <Footer/>
    </div>
  )
}

export default Account