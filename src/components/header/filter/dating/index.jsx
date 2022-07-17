import React from "react";
import "./styles.scss";

const Dating = ({ src, placeholder, onClick, onClickButton, onChange }) => {
  return (
    <div className="dating" onClick={onClick}>
      <div className="dating__image">
        <img className="dating__image__img" src={src} alt="" />
      </div>
      <input
        className="dating__input"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="dating__button" onClick={onClickButton} >Buscar</button>
    </div>
  );
};

export default Dating;
