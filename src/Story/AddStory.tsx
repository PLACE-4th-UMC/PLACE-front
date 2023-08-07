import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { ImagePreview } from './StoryImage';
import { Search } from './Search';

function AddStory () {
  return (
    <>
    <ImagePreview/>
    <Search/>
    </>
  );
}

export default AddStory;