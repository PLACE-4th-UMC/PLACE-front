import React from "react";
import logo from "./logo.svg";
import "./magazine.css";
import Header from "../Header";
import Footer from "../Footer";

function Magazine() {
  return (
    <div>
      <Header />
      <div className="magazine-title-box"></div>
      <div style={{ marginBottom: "38px" }}>
        <div className="sub-title">My fav & My scrap</div>
        <div className="red-bar"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Magazine;
