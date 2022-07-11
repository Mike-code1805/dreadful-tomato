import React, { useEffect, useState } from "react";
import { DataM } from "../../App";
import Cart from "./cart";
import "./styles.scss";

const Movies = () => {
  return (
    <div className="movies">
      {DataM[0].entries.map(
        ({ title, description, images, releaseYear, programType }) =>
          programType == "movie" ? (
            <div className="movies__movieList">
              <Cart
                key={title}
                title={title}
                year={releaseYear}
                description={description}
                image={images["Poster Art"].url}
                logo={"calendar.png"}
              />
            </div>
          ) : null
      )}
      <Cart
        title={"Wolf"}
        year={"2016"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        image={
          "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
        }
        logo={"calendar.png"}
      />
    </div>
  );
};

export default Movies;
