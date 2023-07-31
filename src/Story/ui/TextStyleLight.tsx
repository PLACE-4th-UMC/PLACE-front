import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TextStyle1Props {
  children: ReactNode;
  FontSize: number;
}

function TextStyleLight({ children, FontSize }: TextStyle1Props) {
  return <TextStyle2 FontSize={FontSize}>{children}</TextStyle2>;
}

const TextStyle2 = styled.p <TextStyle1Props>`
  color: #9a9a9a;
  text-align: left;
  font-family: Montserrat;
  font-size: ${(props) => props.FontSize}px;
  font-weight: 500;
  letter-spacing: 0em;
  margin: 0 0 0 0;
`;

export default TextStyleLight;
