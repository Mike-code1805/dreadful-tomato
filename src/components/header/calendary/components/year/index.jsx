import React from "react";
import "./styles.scss";

const Year = ({ text }) => {
  return (
    <div className="year">
      <div className="year__text">{text}</div>
    </div>
  );
};

export default Year;
