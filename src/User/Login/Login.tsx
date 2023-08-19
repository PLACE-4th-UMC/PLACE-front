import React from "react";
import styled from 'styled-components';
import LoginButton from "./LoginButton";
import Header from "../../Header";
import Footer from "../../Footer";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  
  margin-top: 8.56rem;
`;

const LoginButtonContainer = styled.div`
  margin: 5.31rem 0 18rem 0;
`;

function Login() {
  const ButtonData = [
    {id: '카카오', text: '카카오 로그인'},
    {id: '네이버', text: '네이버 로그인'},
    {id: '구글', text: '구글 로그인'}
  ]
  
  return(
    <div>
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default Login;
