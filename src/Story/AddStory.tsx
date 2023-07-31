import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import FlexBox from './ui/FlexBox';
import TextStyleBold from './ui/TextStyleBold';
import TextStyleLight from './ui/TextStyleLight';
import Modal from './Modal';

function AddStory () {
  return (
    <>
    <TextStyleBold FontSize={14}>Name</TextStyleBold>
    <TextStyleLight FontSize={14}>전시명</TextStyleLight>
    <TextStyleBold FontSize={14}>Location</TextStyleBold>
    <TextStyleLight FontSize={14}>위치</TextStyleLight>
    </>
  );
}

export default AddStory;