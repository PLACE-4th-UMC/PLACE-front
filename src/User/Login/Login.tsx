import React from "react";
import styled from 'styled-components';
import Header from "../../Header";
import Footer from "../../Footer";
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";
import GoogleLogin from "./GoogleLogin";

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
  
  return(
    <div>
      <Header/>
      <LoginContainer>
        <LoginTitle>Log in</LoginTitle>
        <LoginButtonContainer>
          <KakaoLogin/>
          <NaverLogin/>
          <GoogleLogin/>
        </LoginButtonContainer>
      </LoginContainer>
      <Footer/>
    </div>
  );
}

export default Login;
