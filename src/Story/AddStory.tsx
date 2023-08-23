import React, { useState, useRef }  from 'react';
import styled from 'styled-components';
// import { ImagePreview } from './StoryImage';
// import { Search } from './Search';
import ImageICON from './images/Image.svg';
import SearchICON from './images/Search.svg';

function AddStory() {
  const [imageSrc, setImageSrc]: any = useState(null);

  const fileInput = useRef<HTMLInputElement>(null);
  // const fileInput = useRef();

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <>
      <DIV onClick={() => fileInput.current?.click()}>
        <IMG src={imageSrc ? imageSrc : ImageICON} />
      </DIV>
      <input accept="image/*" style={{ display: 'none' }} multiple type="file" onChange={(e) => onUpload(e)} ref={fileInput} />
      <SearchBar>
        <img style={{ width: '20px', margin: '0 0 0 1.2rem' }} src={SearchICON} />
        <input type="text" placeholder="다녀온 전시를 검색하세요" id="keyword" style={{ width: '30rem', border: 'none', background: 'none', outline: 'none' }} />
      </SearchBar>
      <ShareButton>share</ShareButton>
    </>
  );
}

const DIV = styled.div`
  width: 33rem;
  height: 22rem;
  background-color: #e8eaec;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 4rem 0 0 0;
`;

const IMG = styled.img`
  width: 33rem;
  height: 22rem;
  object-fit: none;
  border-radius: 0.75rem;
`;

const SearchBar = styled.div`
  width: 33rem;
  height: 3.5rem;
  border-radius: 2rem;
  border: solid 1px #e8eaec;
  margin: 3rem 0 0 0;
  display: flex;
  gap: 1rem;
`;

const ShareButton = styled.button`
  width: 7rem;
  height: 3rem;
  color: #ffffff;
  background-color: #484848;
  border: none;
  border-radius: 1.75rem;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 0.9375rem;
  margin: 4rem 0 0 0;
`;

export default AddStory;