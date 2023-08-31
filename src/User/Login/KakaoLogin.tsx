import React from 'react'
import { styled } from 'styled-components';

const LoginButtons = styled.button`
  width: 22.8125rem;
  height: 3.3125rem;
  border-radius: 0.625rem;
  border: none;
  background-color: #FEE500;
  
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
  margin: 0 5.71rem 0 1.81rem;
`;

function KakaoLogin() {
  function kakaoHandler(){
    
  }
  
  return (
    <LoginButtons>
      <IconSvg id = '카카오' onClick={kakaoHandler} xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8116 0.963501C6.63094 0.963501 0 5.74963 0 11.6525C0 15.3237 2.56472 18.56 6.47024 20.4849L4.82698 26.0929C4.6818 26.5885 5.28842 26.9834 5.75424 26.6963L12.9574 22.2549C13.5653 22.3097 14.183 22.3417 14.8116 22.3417C22.9917 22.3417 29.6231 17.5558 29.6231 11.6525C29.6231 5.74963 22.9917 0.963501 14.8116 0.963501Z" fill="black"/>
      </IconSvg>
      카카오 로그인
    </LoginButtons>
  )
}

export default KakaoLogin