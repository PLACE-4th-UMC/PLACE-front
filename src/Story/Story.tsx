import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import FlexBox from './ui/FlexBox';
import TextStyleBold from './ui/TextStyleBold';
import TextStyleLight from './ui/TextStyleLight';
import Modal from './Modal';
import AddStory from './AddStory';
import { ADDRCONFIG } from 'dns';

function Story() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <header />
      <FlexBox>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <AddStory></AddStory>

          </Modal>
        )}
        <Button onClick={onClickToggleModal}></Button>
        <div>
          <TextStyleBold FontSize={28}>Add Your Story</TextStyleBold>
          <TextStyleLight FontSize={14}>Share your moments, experiences...</TextStyleLight>
        </div>
      </FlexBox>
    </>
  );
}

const Button = styled.button`
  width: 70px;
  height: 70px;
  background-color: #484848;
  border-radius: 35px;
  border: none;
  cursor: pointer;

  &:hover {
  }
`;

export default Story;
