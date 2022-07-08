import React from "react";
import "./styles.scss";

const TrialMessage = ({ text }) => {
  return (
    <div className="trialMessage">
      <div className="trialMessage__text">{text}</div>
    </div>
  );
};

export default TrialMessage;
