import React from "react";
import "./styles.scss";

const Button = ({ text }) => {
  return (
    <div className="button">
      <div className="navText__text">
        <h1 className="navText__text__h1">{text}</h1>
      </div>
    </div>
  );
};

export default Button;
