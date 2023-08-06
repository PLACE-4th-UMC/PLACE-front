import React, { ReactNode } from "react";
import Style from "./Footer.module.css";

function Footer() {
  return (
    <div className={Style["footer"]}>
      <div className={Style["bottom"]}>
        <div className={Style["place"]}>
          Place<span>.</span>
        </div>
        <br />
        <br />
        <div className={Style["sns-btn"]}>PlayStore</div>
        <div className={Style["sns-btn"]}>AppStore</div>
      </div>
    </div>
  );
}

export default Footer;
