import React, { useRef } from "react";
import Arrows from "./components/arrows";
import Years from "./components/years";
import "./styles.scss";

const Calendary = () => {
  const slide = useRef(null);

  const handleClickRight = () => {
    if (slide.current.children.length > 0) {
      const firstElement = slide.current.children[0];
      slide.current.style.transition = `${200}ms ease-out all`;
      slide.current.style.transform = `translateY(-${160}px)`;
      const transition = () => {
        slide.current.style.transition = "none";
        slide.current.style.transform = `translateX(0)`;
        slide.current.appendChild(firstElement);
        slide.current.removeEventListener("transitionend", transition);
      };
      slide.current.addEventListener("transitionend", transition);
    }
  };

  const handleClickLeft = () => {
    if (slide.current.children.length > 0) {
      const index = slide.current.children.length - 1;
      const lastElement = slide.current.children[index];
      slide.current.insertBefore(lastElement, slide.current.firstChild);

      slide.current.style.transition = "none";
      slide.current.style.transform = `translateY(-${160}px)`;

      setTimeout(() => {
        slide.current.style.transition = `${200}ms ease-out all`;
        slide.current.style.transform = `translateY(0)`;
      }, 30);
    }
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
      <div className="calendary__list">
        <Years refe={slide} />
      </div>
    </div>
  );
};

export default Calendary;
