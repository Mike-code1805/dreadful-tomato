import React from "react";
import "./styles.scss";

const Dating = ({ src, placeholder, onClick }) => {
  return (
    <div className="dating" onClick={onClick}>
      <div className="dating__image">
        <img className="dating__image__img" src={src} alt="" />
      </div>
      <input className="dating__input" placeholder={placeholder} />
    </div>
  );
};

export default Dating;
