import React from 'react'
import styled from 'styled-components';


const LoginButtons = styled.button`
  width: 22.8125rem;
  height: 3.3125rem;
  border-radius: 0.625rem;
  border: none;
  background-color: ${({id}) =>
  (id === '카카오' ? '#FEE500' : id === '네이버' ? '#03C75A' : '#EFF0F2')};
  
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
  margin: ${({id}) => (id === '카카오' ? '0 5.71rem 0 1.81rem' : 
  id === '네이버' ? '0 5.87rem 0 2.06rem' : '0 5.75rem 0 1.94rem')};
`;

function LoginButton({text, id}: any) {
  let iconSvg = null;
  
  if (id === '카카오'){
    iconSvg = (
      <IconSvg id = '카카오' xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8116 0.963501C6.63094 0.963501 0 5.74963 0 11.6525C0 15.3237 2.56472 18.56 6.47024 20.4849L4.82698 26.0929C4.6818 26.5885 5.28842 26.9834 5.75424 26.6963L12.9574 22.2549C13.5653 22.3097 14.183 22.3417 14.8116 22.3417C22.9917 22.3417 29.6231 17.5558 29.6231 11.6525C29.6231 5.74963 22.9917 0.963501 14.8116 0.963501Z" fill="black"/>
      </IconSvg>
    );
  }
  else if (id === '네이버'){
    iconSvg = (
      <IconSvg id = '네이버' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M15.5956 12.3088L7.06801 0H0V23H7.4044V10.6892L15.932 23H23V0H15.5956V12.3088Z" fill="white"/>
      </IconSvg>
    );
  }
  else{
    iconSvg = (
      <IconSvg id = '구글' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.46 13.8068C26.46 12.8496 26.3741 11.9291 26.2145 11.0455H13.5V16.2675H20.7655C20.4525 17.955 19.5014 19.3848 18.0716 20.3421V23.7293H22.4345C24.9873 21.3791 26.46 17.9182 26.46 13.8068Z" fill="#4285F4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4996 26.9998C17.1446 26.9998 20.2005 25.791 22.4342 23.7291L18.0712 20.3419C16.8624 21.1519 15.316 21.6305 13.4996 21.6305C9.9835 21.6305 7.00736 19.2557 5.94577 16.0648H1.43555V19.5625C3.65691 23.9746 8.22237 26.9998 13.4996 26.9998Z" fill="#34A853"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94614 16.0651C5.67614 15.2551 5.52273 14.3899 5.52273 13.5001C5.52273 12.6103 5.67614 11.7451 5.94614 10.9351V7.43738H1.43591C0.521591 9.25988 0 11.3217 0 13.5001C0 15.6785 0.521591 17.7403 1.43591 19.5628L5.94614 16.0651Z" fill="#FBBC05"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4996 5.36932C15.4817 5.36932 17.2612 6.05045 18.6603 7.38818L22.5324 3.51614C20.1944 1.33773 17.1385 0 13.4996 0C8.22237 0 3.65691 3.02523 1.43555 7.43727L5.94577 10.935C7.00737 7.74409 9.9835 5.36932 13.4996 5.36932Z" fill="#EA4335"/>
      </IconSvg>
    );
  }
  return (
    <LoginButtons id={id}>
      {iconSvg}
      {text}
    </LoginButtons>
  )
}

export default LoginButton