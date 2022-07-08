import React from "react";
import "./styles.scss";

const Dating = ({ src, placeholder }) => {
  return (
    <div className="dating">
      <div className="dating__image">
        <img className="dating__image__img" src={src} alt="" />
      </div>
      <input className="dating__input" placeholder={placeholder} />
    </div>
  );
};

export default Dating;
