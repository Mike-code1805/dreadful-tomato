import React from "react";
import "./styles.scss";

const NavLink = ({ src, text }) => {
  return (
    <div className="navLink">
      <div className="navLink__image">
        <img className="navLink__image__img" src={src} alt="" />
      </div>
      <div className="navLink__text">
        <h1 className="navLink__text__h1">{text}</h1>
      </div>
    </div>
  );
};

export default NavLink;
