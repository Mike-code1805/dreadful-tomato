import React, { useRef } from "react";
import Arrows from "./components/arrows";
import Years from "./components/years";
import "./styles.scss";

const Calendary = ({ text }) => {
  const slide = useRef(null);

  const handleClickRight = () => {
    console.log(slide.current);
  };
  const handleClickLeft = () => {
    console.log("anterior");
  };
  return (
    <div className="calendary">
      <div className="calendary__arrows">
        <Arrows
          onClickRight={handleClickRight}
          onClickLeft={handleClickLeft}
          text={"2005"}
        />
      </div>
      <Years refe={slide} />
    </div>
  );
};

export default Calendary;
