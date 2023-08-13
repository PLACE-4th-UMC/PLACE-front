import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import TextStyleBold from './ui/TextStyleBold';
import TextStyleLight from './ui/TextStyleLight';
import Modal from './Modal';
import AddStory from './AddStory';

function Story() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [ImageSRC]: any = useState(null);
  const ProfName1: string = 'ProfName1';
  const ProfName2: string = 'ProfName2';
  const ProfName3: string = 'ProfName3';
  const ProfName4: string = 'ProfName4';
  const Date1: string = 'Date1';
  const Date2: string = 'Date2';
  const Date3: string = 'Date3';
  const Date4: string = 'Date4';
  const EventName: string = 'EventName';
  const EventLocation: string = 'EventLocation';


  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div>
          <FlexBox style={{ margin: '8.75rem 4rem 0 6rem' }}> {/*스토리 추가 모달창 오픈*/}
            {isOpenModal && (
              <Modal onClickToggleModal={onClickToggleModal}>
                <AddStory />
              </Modal>
            )}
            <Button onClick={onClickToggleModal}></Button>
            <div>
              <TextStyleBold FontSize={28}>Add Your Story</TextStyleBold>
              <TextStyleLight>Share your moments, experiences...</TextStyleLight>
            </div>
          </FlexBox>
          <div style={{ margin: '6rem 0 16rem 6.5rem' }}> {/*유저들 스토리 조회*/}
            <SemiTitle>Other Stories</SemiTitle>
            <FlexBox>
              <ProfIMG src={ImageSRC && './images/pre.jpg'} />
              <div>
                <TextStyleBold>{ProfName1}</TextStyleBold>
                <TextStyleLight>Shared on: {Date1}</TextStyleLight>
              </div>
            </FlexBox>
            <br></br>
            <FlexBox>
              <ProfIMG src={ImageSRC && './images/pre.jpg'} />
              <div>
                <TextStyleBold>{ProfName2}</TextStyleBold>
                <TextStyleLight>Shared on: {Date2}</TextStyleLight>
              </div>
            </FlexBox>
            <br></br>
            <FlexBox>
              <ProfIMG src={ImageSRC && './images/pre.jpg'} />
              <div>
                <TextStyleBold>{ProfName3}</TextStyleBold>
                <TextStyleLight>Shared on: {Date3}</TextStyleLight>
              </div>
            </FlexBox>
            <br></br>
            <FlexBox>
              <ProfIMG src={ImageSRC && './images/pre.jpg'} />
              <div>
                <TextStyleBold>{ProfName4}</TextStyleBold>
                <TextStyleLight>Shared on: {Date4}</TextStyleLight>
              </div>
            </FlexBox>
          </div>
        </div>
        <div style={{ margin: '10rem 6rem 0 0' }}> {/*최근 스토리 보기*/}
          <SemiTitle>Latest Story</SemiTitle>
          <StoryPreview>
            <div style={{ position: 'relative', top: '24rem', left: '3rem' }}>
              <TextStyleBold FontSize={28} Color={'#FFFFFF'}>
                {EventName}
              </TextStyleBold>
              <TextStyleLight FontSize={18} Color={'#C4C4C4'}>
                {EventLocation}
              </TextStyleLight>
            </div>
          </StoryPreview>
        </div>
      </div>
      <Footer />
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

const FlexBox = styled.div`
width: 24rem;
  display: flex;
  gap: 28px;
  align-items: center;
`;

const StoryPreview = styled.div`
  width: 46rem;
  height: 30rem;
  background: antiquewhite;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column; 
  align-content: center;
`;

const SemiTitle = styled.p`
  color: #9A9A9A;
  text-align: left;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0em;
  margin: 1em 0;
`;
const ProfIMG = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: none;
`;

export default Story;
