import React from "react";
import "./styles.scss";

const LinkFooter = ({ text }) => {
  return (
    <div className="linkFooter">
      <link>{text}</link>
    </div>
  );
};

export default LinkFooter;
