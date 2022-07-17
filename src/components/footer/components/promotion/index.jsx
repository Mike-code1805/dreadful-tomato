import React from "react";
import "./styles.scss";

const Promotion = ({ textFirst, textSecond, onClick, src }) => {
  return (
    <div onClick={onClick} className="container">
      <img className="container__img" src={src} alt="" />
      <div className="container__h1">
        <h1 className="container__h1__textFirst">{textFirst}</h1>
        <h1 className="container__h1__textSecond">{textSecond}</h1>
      </div>
    </div>
  );
};

export default Promotion;
