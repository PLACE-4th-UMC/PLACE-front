import React, { ReactNode } from "react";
import Style from "./Footer.module.css";

function Footer() {
  return (
    <div className={Style["footer"]}>
      <div className={Style["bottom"]}>
        <div>
          <div className={Style["place"]}>
            Place<span>.</span>
          </div>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div className={Style["sns-btn"]} style={{ marginLeft: "80px" }}>
              PlayStore
            </div>
            <div className={Style["sns-btn"]} style={{ marginRight: "101px" }}>
              AppStore
            </div>
          </div>
        </div>
        <div style={{ marginRight: "60px", marginTop: "86px" }}>
          <div className={Style["menu"]}>COMPANY</div>
          <div className={Style["menu-list"]}>About Us</div>
          <div className={Style["menu-list"]}>Legal Information</div>
          <div className={Style["menu-list"]}>Contact Us</div>
        </div>
        <div style={{ marginRight: "60px", marginTop: "86px" }}>
          <div className={Style["menu"]}>HELP CENTER</div>
          <div className={Style["menu-list"]}>Find a Property</div>
          <div className={Style["menu-list"]}>How To Host?</div>
          <div className={Style["menu-list"]}>Why Us?</div>
          <div className={Style["menu-list"]}>FAQs</div>
        </div>
        <div style={{ marginTop: "86px" }}>
          <div className={Style["menu"]}>CONTACT INFO</div>
          <div className={Style["menu-list"]}>Phone: 1234567890</div>
          <div className={Style["menu-list"]}>Email: company@email.com</div>
          <div className={Style["menu-list"]}>Locatino: 100 Smart Street, LA, USA</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
