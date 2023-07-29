import React from "react";
import styled from 'styled-components';
import LoginButton from "./LoginButton";

const LoginContainer = styled.div`
`;

const LoginTitle = styled.p`
  width: 37.8125rem;
  height: 2.75rem;
  flex-shrink: 0;
  color: #484848;
  text-align: center;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
`;

function Login() {
  const ButtonData = [
    {id: 1, text: '카카오 로그인', img: '/Images/User/kakao_background.png', alt: '카카오'},
    {id: 1, text: '네이버 로그인', img: '/Images/User/naver_background.png', alt: '네이버'},
    {id: 1, text: '구글 로그인', img: '/Images/User/google_background.png', alt: '구글'}
  ]
  
  return(
    <LoginContainer>
      <LoginTitle>Log in</LoginTitle>
      {ButtonData.map((button) => (
        <LoginButton
          key = {button.id}
          text = {button.text}
          img = {button.img}
        />
      ))}
    </LoginContainer>
  );
}

export default Login;
