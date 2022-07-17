import React from "react";
import "./styles.scss";

const NavFilter = ({ src, text, onClick }) => {
  return (
    <div onClick={onClick} className="navFilter">
      <div className="navFilter__image">
        <img className="navFilter__image__img" src={src} alt="" />
      </div>
      <div className="navFilter__text">
        <h1 className="navFilter__text__h1">{text}</h1>
      </div>
    </div>
  );
};

export default NavFilter;
