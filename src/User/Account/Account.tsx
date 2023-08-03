import React from 'react'
import styled from 'styled-components'

const AccountContainer = styled.div`
  flext-shrink: 0;
  display: flex;
  align-items: flex-start;
`;

// 사이드 박스

const SideBox = styled.div`
  margin-top: 5.5rem;
  margin-left: 4.75rem;
  width: 17.4375rem;
  height: 27.9375rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
`;

const AccountProfileImage = styled.img`
  margin-left: 4rem;
  margin-top: 2rem;
  width: 9.4375rem;
  height: 9.4375rem;
`;

const SideBoxName = styled.p`
  margin-left: 3.19rem;
  margin-top: 2.5rem;
  height: 2.75rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SideBoxCountry = styled.p`
  margin-left: 3.13rem;
  margin-top: 1.25rem;
  height: 1.25rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SideBoxDate = styled.p`
  margin-left: 3.13rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  height: 1.25rem;
  color: #9A9A9A;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const EditProfileBtn = styled.button`
  margin-left: 4.56rem;
  margin-top: 2.38rem;
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
  margin-left: 4.37rem;
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
  margin-left: 35.25rem;
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
  width: 39.9375rem;
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

function Account() {
  return (
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
      </MainContents>
    </AccountContainer>
  )
}

export default Account