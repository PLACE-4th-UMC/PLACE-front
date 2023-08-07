import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ImageICON from './images/shape.svg';

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
          {/* <img src={require("./images/shape.png")} alt='none'></img> */}
          <IMG src={imageSrc ? imageSrc:{ImageICON}} />
        </DIV>
        <input accept="image/*" style={{ display: 'none' }} multiple type="file" onChange={(e) => onUpload(e)} ref={fileInput} />
      </>
    );
};

const DIV = styled.div`
  width: 60vw;
  height: 60vh;
  background-color: #e8eaec;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const IMG = styled.img`
  width: 65vw;
  height: 60vh;
  object-fit: cover;
  border-radius: 12px;
`;