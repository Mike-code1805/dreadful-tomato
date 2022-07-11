import React from "react";
import "./styles.scss";

const Slider = ({ text, onClickRight, onClickLeft, len }) => {
  const auxArray = [];
  for (let index = 1; index <= len; index++) {
    auxArray.push(index);
  }

  return (
    <div className="slider">
      <div className="slider__left" onClick={onClickLeft}>
        <div>{"◀"}</div>
      </div>
      <div className="slider__text">
        {auxArray.map((aux) => (
          <button className="slider__text__number">{aux}</button>
        ))}
      </div>
      <div className="slider__right" onClick={onClickRight}>
        <div>{"▶"}</div>
      </div>
    </div>
  );
};

export default Slider;
