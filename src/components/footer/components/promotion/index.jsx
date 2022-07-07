import React from "react";
import "./styles.scss";

const Promotion = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className="container">
      hifaffddhifaffddhifaffddhifaffddhifaffddhi
      faffddhifaffddhifaffddhifaffddhifaffdd
      faffddhifaffddhifaffddhifaffddhifaffdd
      faffddhifaffddhifaffddhifaffddhifaffdd
      <span className="linkFooter--span">{text}</span>
    </div>
  );
};

export default Promotion;
