import React from "react";
import logo from "./logo.svg";
import "./magazine.css";
import Header from "../Header";
import Footer from "../Footer";

interface ItemProps {
  // leftMargin: number;
}

const Item: React.FC<ItemProps> = () => {
  return (
    <div style={{ margin: "auto" }}>
      <div className="item-box"></div>
      <div className="item-title">아이템 제목</div>
      <div className="item-address">아이템 주소</div>
    </div>
  );
};

function Magazine() {
  return (
    <div>
      <Header />
      <div className="magazine-title-box"></div>
      <div style={{ marginBottom: "38px" }}>
        <div className="sub-title">My fav & My scrap</div>
        <div className="red-bar"></div>
      </div>

      <div style={{ display: "flex", marginLeft: "40px", marginRight: "40px" }}>
        <Item />
        <Item />
        <Item />
      </div>
      <div style={{ display: "flex", marginLeft: "40px", marginRight: "40px" }}>
        <Item />
        <Item />
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default Magazine;
