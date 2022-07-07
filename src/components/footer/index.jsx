import React from "react";
import Promotion from "./components/promotion";
import LinkFooter from "./components/linkFooter";
import Message from "./components/message";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__img">
          <img className="footer__img--width" src="logo.jpeg" alt="" />
        </div>
        <div className="footer__linkFooter">
          <LinkFooter text={"Home"} />
          <LinkFooter text={"Terms of use"} />
          <LinkFooter text={"Legal Notices"} />
          <LinkFooter text={"Help"} />
          <LinkFooter text={"Manage Account"} />
        </div>
        <div className="footer__promotion">
          <Promotion src={'apple.png'} textFirst="Available on the" textSecond={"App Store"} />
          <Promotion src={'playstore.png'} textFirst="GET IT ON" textSecond={"Google Play"} />
        </div>
        <div className="footer__message">
          <Message
            text={
              "Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
