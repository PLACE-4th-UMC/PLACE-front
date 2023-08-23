import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #000000;
  display: grid;
  grid-template-columns: 20% 80%;
  height: 6.3125rem;
  align-items: center;
`;

const HeaderLogoWrapper = styled.div``;

const HeaderLogo = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 35px;
  margin-left: 20%;
  color: #f5f5f5;
`;

const HeaderLogoDot = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 35px;
  color: #e52a2a;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  gap: 7%;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

const MenuLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
`;

const MenuLeftText = styled.a`
  color: #eff0f2;
`;

const Dropdown = styled.div`
  display: inline-block;
  position: relative;

  &:hover .dropdown-content {
    display: block;
  }
`;

const DropdownContent = styled.div`
  padding: 0;
  padding-top: 2vh;
  display: none;
  position: absolute;
  width: 100%;
  line-height: 5vh;
  height: 11rem;
`;

const DropdownContentMenu = styled.a`
  display: block;
  padding-top: 1.5vh;
  padding-bottom: 0.5vh;
  background-color: #000000;
  color: #9a9a9a;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;

  &:hover {
    color: #e52a2a;
  }
`;

const MenuLeftCategories = styled.span`
  color: #eff0f2;
`;

const MenuRight = styled.div``;

const MenuRightLogin = styled.a`
  color: #c2c6cc;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderLogo href="/">Place</HeaderLogo>
        <HeaderLogoDot href="/">.</HeaderLogoDot>
      </HeaderLogoWrapper>
      <Menu>
        <MenuLeft>
          <MenuLeftText href="/exhibitions">Exhibitions</MenuLeftText>
          <Dropdown>
            <MenuLeftCategories>Categories</MenuLeftCategories>
            <DropdownContent className="dropdown-content">
              <DropdownContentMenu href="/categories/Design">
                디자인
              </DropdownContentMenu>
              <DropdownContentMenu href="/categories/Photo">
                사진
              </DropdownContentMenu>
              <DropdownContentMenu href="/categories/Experience">
                체험
              </DropdownContentMenu>
              <DropdownContentMenu href="/categories/Install">
                설치미술
              </DropdownContentMenu>
            </DropdownContent>
          </Dropdown>
          <MenuLeftText href="/community">Community</MenuLeftText>
          <MenuLeftText href="/story">Share Story</MenuLeftText>
          <MenuLeftText href="/magazine">Place Magazine</MenuLeftText>
        </MenuLeft>
        <MenuRight>
          <MenuRightLogin href="/login">Login</MenuRightLogin>
        </MenuRight>
      </Menu>
    </HeaderWrapper>
  );
}

export default Header;
