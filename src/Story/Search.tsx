import React from "react";
import styled from 'styled-components';

export const Search = () => {

    return (
      <>
        <br></br>
          <Input type="text" placeholder='다녀온 전시를 검색하세요' id="keyword" />
      </>
    );
};

const Input = styled.input`
  width: 60vw;
  height: 5vw;
  border-radius: 35px;
  border: solid 1px #e8eaec;
`;
