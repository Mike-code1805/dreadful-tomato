import React from "react";
import "./styles.scss";

const LinkFooter = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className="linkFooter">
      <span className="linkFooter__span">{text}</span>
    </div>
  );
};

export default LinkFooter;
