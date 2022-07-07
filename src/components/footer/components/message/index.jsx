import React from "react";
import "./styles.scss";

const Message = ({ text }) => {
  return (
    <span className="message">{text}</span>
  );
};

export default Message;
