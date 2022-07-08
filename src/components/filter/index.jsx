import React from "react";
import Dating from "./dating";
import Searching from "./searching";
import "./styles.scss";

const Filter = () => {
  return (
    <div className="filter">
      <Searching src={"search.png"} placeholder={"Name"} />
      <Dating src={"calendar.png"} placeholder={"1920-1998"} />
    </div>
  );
};

export default Filter;
