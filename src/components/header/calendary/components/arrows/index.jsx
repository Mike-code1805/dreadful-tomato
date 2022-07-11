import React from "react";
import "./styles.scss";

const Arrows = ({ text, onClickRight, onClickLeft }) => {
  return (
    <div className="arrows">
      <div className="arrows__left" onClick={onClickLeft}>
        <div>{"<"}</div>
      </div>
      <div className="arrows__text">
        <div>{text}</div>
      </div>
      <div className="arrows__right" onClick={onClickRight}>
        <div>{">"}</div>
      </div>
    </div>
  );
};

export default Arrows;
