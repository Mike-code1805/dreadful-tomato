import React from "react";
import "./styles.scss";

const Slider = ({ onClickButton, onClickRight, onClickLeft, len, refe }) => {
  const auxArray = [];
  for (let index = 1; index <= len; index++) {
    auxArray.push(index);
  }
  return (
    <div className="slider">
      <div className="slider__left" onClick={onClickLeft}>
        <div>{"◀"}</div>
      </div>
      <div ref={refe} className="slider__text">
        {auxArray.map((aux, index) => (
          <button
            key={index}
            onClick={onClickButton}
            className="slider__text__number"
          >
            {aux}
          </button>
        ))}
      </div>
      <div className="slider__right" onClick={onClickRight}>
        <div>{"▶"}</div>
      </div>
    </div>
  );
};

export default Slider;
