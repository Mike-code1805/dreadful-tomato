import React from "react";
import Dating from "./dating";
import Searching from "./searching";
import "./styles.scss";

const Filter = ({ onClick }) => {
  return (
    <div className="filter">
      <Searching src={"search.png"} placeholder={"Name"} />
      <Dating
        onClick={onClick}
        src={"calendar.png"}
        placeholder={"1920-1998"}
      />
    </div>
  );
};

export default Filter;
