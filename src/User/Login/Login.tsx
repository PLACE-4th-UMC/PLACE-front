import React from "react";
import styled from 'styled-components';
import LoginButton from "./LoginButton";

const LoginTitle = styled.p`
  width: 37.8125rem;
  height: 2.75rem;
  color: #484848;
  text-align: center;
  font-family: Montserrat;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  
  margin-left: 23.81rem;
  margin-top: 8.56rem;
`;

const LoginContainer = styled.div`
  
`;

const LoginButtonContainer = styled.div`
  margin-top: 5.31rem;
  margin-bottom: 19.25rem;
`;

function Login() {
  const ButtonData = [
    {id: '카카오', text: '카카오 로그인'},
    {id: '네이버', text: '네이버 로그인'},
    {id: '구글', text: '구글 로그인'}
  ]
  
  return(
    <LoginContainer>
      <LoginTitle>Log in</LoginTitle>
      <LoginButtonContainer>
        {ButtonData.map((button) => (
          <LoginButton
            id = {button.id}
            text = {button.text}
          />
        ))}
      </LoginButtonContainer>
    </LoginContainer>
  );
}

export default Login;
