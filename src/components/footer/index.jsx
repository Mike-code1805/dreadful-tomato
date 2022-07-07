import React from "react";
import Promotion from "./components/promotion";
import LinkFooter from "./components/linkFooter";
import Message from "./components/message";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <LinkFooter text={"Home"} />
        <div className="footer--promotion">
          <Promotion />
          <Promotion />
        </div>
        <div className="footer--message">
          <Message
            text={
              "fnadanfadnandfnadfa fnadanfadnandfnadfa fnadanfadnandfnadfa fnadanfadnandfnadfa"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
