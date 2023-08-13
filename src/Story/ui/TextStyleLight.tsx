import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TextStyle1Props {
  children: ReactNode;
  FontSize?: number;
  Color?: string;
}

function TextStyleLight({ children, FontSize, Color }: TextStyle1Props) {
  return (
    <TextStyle2 FontSize={FontSize} Color={Color}>
      {children}
    </TextStyle2>
  );
}

const TextStyle2 = styled.p<TextStyle1Props>`
  color: ${(props) => props.Color || '#9a9a9a'};
  text-align: left;
  font-family: Montserrat;
  font-size: ${(props) => props.FontSize || 14}px;
  font-weight: 500;
  letter-spacing: 0em;
  margin: 0 0 0 0;
`;

export default TextStyleLight;
