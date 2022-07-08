import React from "react";
import Year from "../year";
import "./styles.scss";

const Years = () => {
  const Y = [];
  let initialYear = 1920;
  let finallyYear = 2022;
  let ArrayYear = initialYear;
  for (let i = 0; i <= finallyYear - initialYear; i++) {
    Y.push(ArrayYear);
    ArrayYear++;
  }
  return (
    <div className="years">
      {Y.map((item) => (
        <Year key={item} text={item} />
      ))}
    </div>
  );
};

export default Years;
