import React from "react";
import "./styles.scss";

const Searching = ({ src, placeholder }) => {
  return (
    <div className="searching">
      <div className="searching__image">
        <img className="searching__image__img" src={src} alt="" />
      </div>
      <input className="searching__input" placeholder={placeholder} />
    </div>
  );
};

export default Searching;
