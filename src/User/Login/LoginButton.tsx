import React from 'react'
import styled from 'styled-components';


const LoginButtons = styled.p`
  width: 22.8125rem;
  height: 3.3125rem;
  border-radius: 0.625rem;
  background-color: ${({id}) =>
  (id === '카카오' ? '#FEE500' : id === '네이버' ? '#03C75A' : '#EFF0F2')};
  
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3rem;
  
  margin-left: 31.31rem;
`;

function LoginButton({text, id}: any) {
  return (
    <LoginButtons id={id}>
      {text}
    </LoginButtons>
  )
}

export default LoginButton