import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const TextStyle1 = styled.p<TextStyle1Props>`
  color: #484848;
  text-align: left;
  font-family: Montserrat;
  font-size: ${(props) => props.FontSize}px;
  letter-spacing: 0em;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

interface TextStyle1Props {
  children: ReactNode;
  FontSize: number;
}

function TextStyleBold ({ children,FontSize }: TextStyle1Props) {
  return (
        <TextStyle1 FontSize={FontSize}>{children}</TextStyle1>
  );
}

export default TextStyleBold;