import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const TextStyle1 = styled.p<TextStyle1Props>`
  text-align: left;
  font-family: Montserrat;
  font-size: ${(props) => props.FontSize || 18}px;
  color: ${(props) => props.Color || '#484848'};
  letter-spacing: 0em;
  font-weight: ${(props) => props.fontWeight || 700};
  margin: 0;
`;

interface TextStyle1Props {
  children: ReactNode;
  FontSize?: number;
  Color?: string;
  fontWeight?: number;
}

function TextStyleBold ({ children,FontSize,Color,fontWeight }: TextStyle1Props) {
  return (
    <TextStyle1 FontSize={FontSize} Color={Color} fontWeight={fontWeight}>
      {children}
    </TextStyle1>
  );
}

export default TextStyleBold;