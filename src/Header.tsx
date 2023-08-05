import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-logo-wrapper">
          <a href="/" className="header-logo">
            Place
          </a>
          <a href="/" className="header-logo-dot">
            .
          </a>
        </div>
        <div className="menu">
          <div className="menuLeft">
            <a href="/exhibitions">Exhibitions</a>
            <div className="dropdown">
              <span>Categories</span>
              <div className="dropdown-content">
                <a href="/categories/Design">디자인</a>
                <a href="/categories/Photo">사진</a>
                <a href="/categories/Experience">체험</a>
                <a href="/categories/Install">설치미술</a>
              </div>
            </div>
            <a href="/community">Community</a>
            <a href="/story">Share Story</a>
            <a href="/magazine">Place Magazine</a>
          </div>
          <div className="menuRight">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
