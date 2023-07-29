import React from 'react'
import styled from 'styled-components';

const LoginButtonContainer = styled.div`
  
`;

const LoginButtonImg = styled.img`
  width: 22.8125rem;
  height: 3.3125rem;
  flex-shrink: 0;
`;

const LoginButtonText= styled.p`
  display: flex;
  width: 14.481rem;
  height: 1.3125rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3rem;
`;

function LoginButton({img, alt, text}: any) {
  return (
    <LoginButtonContainer>
      <LoginButtonImg
        src={img} 
        alt={alt}
      />
      <LoginButtonText>{text}</LoginButtonText>
    </LoginButtonContainer>
  )
}

export default LoginButton