import React from 'react'
import styled from 'styled-components';

const SetProfileContainer = styled.div`
  margin-left: 9.19rem;
  flex-shrink: 0;
`;

const SetProfileTitle = styled.p`
  margin-top: 6.5rem;
  margin-bottom: 4.5rem;
  height: 2.75rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
`;

const SetProfileImage = styled.img`
  margin-left: 27.19rem;
  margin-top: 3rem;
  width: 12.6875rem;
  height: 12.6875rem;
`;

const InfoTitle = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  height: 1.0625rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InfoInput = styled.input`
  width: 64.875rem;
  height: 3.5625rem;
  border-radius: 0.625rem;
  border: 1px solid #E0E2E6;
  background: #FFF;
  
  &::placeholder{
    padding-left: 2rem;
    height: 1.5625rem;
    color: #9A9A9A;
    font-family: Montserrat;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const SaveButton = styled.button`
  margin-left: 28.56rem;
  margin-top: 5.56rem;
  margin-bottom: 21.5rem;
  width: 9.875rem;
  height: 3.375rem;
  border-radius: 0.375rem;
  border: 1px solid #C2C6CC;
  background: #FFF;
  
  color: #484848;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;



function SetProfile() {
  return (
    <SetProfileContainer>
      <SetProfileTitle>Set Profile</SetProfileTitle>
      <SetProfileImage src='/Images/User/profile.png' alt='프로필'/>
      <InfoTitle>Name</InfoTitle>
      <InfoInput placeholder='junyeeee'></InfoInput>
      <InfoTitle>Email</InfoTitle>
      <InfoInput placeholder='a01049253427@gmail.com'></InfoInput>
      <InfoTitle>Date of Birth</InfoTitle>
      <InfoInput placeholder='02/07/2001'></InfoInput>
      <InfoTitle>Country</InfoTitle>
      <InfoInput placeholder='South Korea'></InfoInput>
      <SaveButton>Save</SaveButton>
    </SetProfileContainer>
  )
}

export default SetProfile