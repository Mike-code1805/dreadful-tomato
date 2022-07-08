import React from "react";
import Years from "./components/years";
import "./styles.scss";

const Calendary = ({ text }) => {
  return (
    <div className="calendary">
      <Years />
    </div>
  );
};

export default Calendary;
