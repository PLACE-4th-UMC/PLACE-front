import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import CSS from 'csstype';
import Header from '../Header';
import FlexBox from './ui/FlexBox';
import TextStyle1 from './ui/TextStyle1';
import TextStyle2 from './ui/TextStyle2';

const btnStyle: CSS.Properties = {
  width: '70px',
  height:'70px',
  background: '#484848',
  borderRadius:'35px'

};

function Story() {
  const navigate = useNavigate();

  return (
    <>
      <header />
      <div style={FlexBox}>
        <button style={btnStyle} onClick={() => {navigate('/NewStory');}}></button>
        <div>
          <p style={TextStyle1}>Add Your Stories</p>
          <p style={TextStyle2}>Share your moments, experiences...</p>
        </div>
      </div>
    </>
  );
}

export default Story;
