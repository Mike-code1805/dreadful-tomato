import React, { useContext, useRef } from "react";
import SerieContext from "../../context/contextSerie/SerieContext";
import Cart from "../movies/cart";
import Slider from "../movies/Slider";

import "./styles.scss";

const Series = () => {
  const slide = useRef(null);

  const { data } = useContext(SerieContext);

  const handleClickRight = () => {
    if (slide.current.children.length > 0) {
      const firstElement = slide.current.children[0];
      slide.current.style.transition = `${10}ms ease-out all`;
      slide.current.style.transform = `translateX(-${160}px)`;
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
      slide.current.style.transform = `translateX(-${160}px)`;

      setTimeout(() => {
        slide.current.style.transition = `${100}ms ease-out all`;
        slide.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <>
      <div className="movies" ref={slide}>
        {data.map((items) => {
          return (
            <div key={items[0].title} className="movies__items">
              {items.map((item) => {
                return (
                  <Cart
                    key={item.title}
                    title={item.title}
                    year={item.releaseYear}
                    description={item.description}
                    image={item.images["Poster Art"].url}
                    logo={"calendar.png"}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="slider_movies">
        <Slider
          onClickButton={handleClickRight}
          onClickLeft={handleClickLeft}
          onClickRight={handleClickRight}
          len={data.length}
        />
      </div>
    </>
  );
};

export default Series;
