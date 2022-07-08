import React from "react";
import "./styles.scss";

const NavText = ({ text }) => {
  return (
    <div className="navText">
      <div className="navText__text">
        <h1 className="navText__text__h1">{text}</h1>
      </div>
    </div>
  );
};

export default NavText;
