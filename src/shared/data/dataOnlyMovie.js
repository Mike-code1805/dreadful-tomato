import { DataM } from "../../App";

const dataOnlyMovie = () => {
  const Y = DataM[0].entries;
  const dataOnlyMovies = [];

  for (let index = 0; index < Y.length; index++) {
    if (Y[index].programType === "movie") {
      dataOnlyMovies.push(Y[index]);
    }
  }

  return dataOnlyMovies;
};

export default dataOnlyMovie;
