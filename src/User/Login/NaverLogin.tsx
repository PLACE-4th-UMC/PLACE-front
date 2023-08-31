import React from 'react'
import { styled } from 'styled-components';

const LoginButtons = styled.button`
  width: 22.8125rem;
  height: 3.3125rem;
  border-radius: 0.625rem;
  border: none;
  background-color: #03C75A;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3rem;
  text-align: center;
  margin: 0 0 1.25rem 0;
`;

const IconSvg = styled.svg`
  margin: 0 5.87rem 0 2.06rem;
`;

function NaverLogin() {
  function naverHandler(){
    
  }
  
  return (
    <LoginButtons>
      <IconSvg id = '네이버' onClick={naverHandler} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M15.5956 12.3088L7.06801 0H0V23H7.4044V10.6892L15.932 23H23V0H15.5956V12.3088Z" fill="white"/>
      </IconSvg>
      네이버 로그인
    </LoginButtons>
  )
}

export default NaverLogin