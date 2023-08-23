import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ImageICON from './images/Image.svg';

export const ImagePreview = () => {
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
    }

    return (
      <>
        <DIV onClick={() => fileInput.current?.click()}>
          <IMG src={imageSrc ? imageSrc : ImageICON } />
        </DIV>
        <input accept="image/*" style={{ display: 'none' }} multiple type="file" onChange={(e) => onUpload(e)} ref={fileInput} />
      </>
    );
};

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