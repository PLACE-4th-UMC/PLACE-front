import React from "react";
import styled from 'styled-components';
import SearchICON from './images/Search.svg';

export const Search = () => {

    return (
      <>
      <SearchBar>
          <img style={{ width: '20px', margin: '0 0 0 1.2rem'}} src={SearchICON} />
          <input type="text" placeholder="다녀온 전시를 검색하세요" id="keyword"
          style={{width:'30rem', border:'none', background: 'none', outline: 'none'}}/>
        </SearchBar>
      </>
    );
};

const SearchBar = styled.div`
  width: 33rem;
  height: 3.5rem;
  border-radius: 2rem;
  border: solid 1px #e8eaec;
  margin: 3rem 0 0 0;
  display: flex;
  gap: 1rem;
`;