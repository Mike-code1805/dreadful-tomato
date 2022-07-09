import React from "react";
import datesCount from "../../../../shared/data/years";
import Year from "../year";
import "./styles.scss";

const Years = ({ refe }) => {
  console.log(datesCount);
  return (
    <div className="years" ref={refe}>
      {datesCount.map((items) => {
        return (
          <div key={items} className="years__items">
            {items.map((item) => {
              return <Year key={item} text={item} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Years;
