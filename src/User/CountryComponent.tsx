import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const CustomSelectWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-left: 9.19rem;
  width: calc(100% - 18.38rem);
  border-radius: 0.625rem;
  border: 1px solid #E0E2E6;
  background: #FFF;
  
  font-family: Montserrat;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #9A9A9A;
  padding-left: 2rem;
  padding-top: 1.12rem;
  padding-bottom: 0.87rem;
  height: 1.5625rem;
`;

const OptionsList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.625rem;
  background-color: #fff;
  
  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
  
  max-height: 17.6875rem;
  overflow-y: scroll;
  
  &::-webkit-scrollbar{
    width: 2.8075rem;
  }
  
  &::-webkit-scrollbar-thumb{
    height: 3.5575rem;
    border-radius: 2rem;
    background-clip: padding-box;
    background-color: #9A9A9A;
    border: 0.81rem solid transparent;
  }
`;

const OptionItem = styled.div`
  &:hover {
    background-color: #EFF0F2;
  }
  padding-left: 2rem;
  padding-top: 1.12rem;
  padding-bottom: 0.87rem;
  height: 1.5625rem;
  color: #9A9A9A;
  font-family: Montserrat;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CountryComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countries = response.data.map((country: any) => country.name.common);
      const sortedCountries = countries.sort();
      setCountryOptions(sortedCountries);
    });
  }, []);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <CustomSelectWrapper onClick={toggleOptions}>
      {selectedValue || '　'}
      <OptionsList isOpen={isOpen}>
        {countryOptions.map((option) => (
          <OptionItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </OptionItem>
        ))}
      </OptionsList>
    </CustomSelectWrapper>
  );
};

export default CountryComponent;