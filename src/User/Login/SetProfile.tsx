import React, { useState } from 'react'
import styled from 'styled-components';
import CountryComponent from '../CountryComponent';
import Header from '../../Header';
import Footer from '../../Footer';

const SetProfileContainer = styled.div`
  flex-shrink: 0;
`;

const SetProfileTitle = styled.p`
  margin: 6.5rem 0 4.5rem 9.19rem;
  height: 2.75rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
`;

const SetProfileImage = styled.img`
  margin: 3rem 50% 0 50%;
  width: 12.6875rem;
  height: 12.6875rem;
`;

const InfoTitle = styled.p`
  margin: 1.25rem 0 1.25rem 9.19rem;
  height: 1.0625rem;
  color: #484848;
  font-family: Montserrat;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InfoInput = styled.input`
  margin: 0 11.31rem 0 9.19rem;
  width: calc(100% - 18.38rem);
  height: 3.5625rem;
  border-radius: 0.625rem;
  border: 1px solid #E0E2E6;
  background: #FFF;
  padding-left: 2rem;
  padding-top: 1.12rem;
  padding-bottom: 0.87rem;
  height: 1.5625rem;
  color: #9A9A9A;
  font-family: Montserrat;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SaveButton = styled.button`
  margin: 5.56rem 50% 21.5rem 50%;
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  console.log(name, email, birth, country);
  
  return (
    <div>
      <Header/>
      <SetProfileContainer>
        <SetProfileTitle>Set Profile</SetProfileTitle>
        <SetProfileImage src='/Images/User/Login/profile.png' alt='프로필'/>
        <InfoTitle>Name</InfoTitle>
        <InfoInput 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InfoTitle>Email</InfoTitle>
        <InfoInput 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InfoTitle>Date of Birth</InfoTitle>
        <InfoInput 
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        <InfoTitle>Country</InfoTitle>
        <CountryComponent/>
        <SaveButton>Save</SaveButton>
      </SetProfileContainer>
      <Footer/>
    </div>
  )
}

export default SetProfile