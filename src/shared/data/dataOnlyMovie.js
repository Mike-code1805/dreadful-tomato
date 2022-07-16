import { DataM } from "../../App";

const dataOnlyMovie = () => {
  const Y = DataM[0].entries;
  const datasMovie = [];
  const dataOnlyMovies = [];

  for (let index = 0; index < Y.length; index++) {
    if (Y[index].programType === "movie") {
      dataOnlyMovies.push(Y[index]);
    }
  }

  // if (dataOnlyMovies.length % 8 === 0) {
  //   for (let i = 0; i < dataOnlyMovies.length; i++) {
  //     const subArray = dataOnlyMovies.slice(i, i + 8);
  //     datasMovie.push(subArray);
  //     i += 7;
  //   }
  // } else {
  //   for (let index = 0; index < dataOnlyMovies.length % 8; index++) {
  //     dataOnlyMovies.push(dataOnlyMovies[index]);
  //   }
  //   for (let i = 0; i < dataOnlyMovies.length; i++) {
  //     const subArray = dataOnlyMovies.slice(i, i + 8);
  //     datasMovie.push(subArray);
  //     i += 7;
  //   }
  // }

  return dataOnlyMovies;
};

export default dataOnlyMovie;
