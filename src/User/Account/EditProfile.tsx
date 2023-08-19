import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CountryComponent from '../CountryComponent';
import Header from '../../Header';
import Footer from '../../Footer';

const EditProfileContainer = styled.div`
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const BackBtn = styled.img`
  margin-left: 6.94rem;
  width: 1.3125rem;
  height: 2.6875rem;
`;

const EditProfileImage = styled.img`
  margin: 3rem 50% 0 calc(50% - 9.19rem);
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



function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  console.log(name, email, birth, country);
  
  const navigate = useNavigate();
  
  const handleBackBtn = () => {
    navigate('../')   // 이전 페이지로 이동
  }
  
  return (
    <div>
      <Header/>
      <EditProfileContainer>
        <TopContainer>
          <BackBtn src='/Images/User/Account/backBtn.png' alt='뒤로 가기' onClick={handleBackBtn}/>
          <EditProfileImage src='/Images/User/Account/profile.png' alt='프로필'/>
        </TopContainer>
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
      </EditProfileContainer>
      <Footer/>
    </div>
  )
}

export default EditProfile