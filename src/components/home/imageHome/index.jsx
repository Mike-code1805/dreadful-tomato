import React from "react";
import "./styles.scss";

const ImageHome = ({ src, text, onClick }) => {
  return (
    <div onClick={onClick} className="imageHome">
      <img className="imageHome__img" src={src} alt="" />
      <div className="imageHome__text">
        <h1 className="imageHome__text__h1">{text}</h1>
      </div>
    </div>
  );
};

export default ImageHome;
