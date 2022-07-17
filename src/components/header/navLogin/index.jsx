import React from "react";
import "./styles.scss";

const NavLogin = ({ src, text }) => {
  return (
    <div className="navLogin">
      <div className="navLogin__text">
        <h1 className="navLogin__text__h1">{text}</h1>
      </div>
      <div className="navLogin__image">
        <img className="navLogin__image__img" src={src} alt="" />
      </div>
    </div>
  );
};

export default NavLogin;
