import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexBoxProps {
  children: ReactNode;
}

function FlexBox1({ children }: FlexBoxProps) {
  return (
    <Flex>
      {children}
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  gap: 28px;
  align-Items: center;
`;

export default FlexBox1;