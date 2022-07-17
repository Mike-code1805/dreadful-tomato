import React, { useContext, useState } from "react";
import SerieContext from "../../../context/contextSerie/SerieContext";
import DataContext from "../../../context/DataContext";
import dataOnlyMovie from "../../../shared/data/dataOnlyMovie";
import dataOnlySerie from "../../../shared/data/dataOnlySerie";
import Dating from "./dating";
import Searching from "./searching";
import "./styles.scss";

const Filter = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const dataToFilterMovie = dataOnlyMovie();
  const dataToFilterSerie = dataOnlySerie();
  const { createData } = useContext(DataContext);
  const { createSerie } = useContext(SerieContext);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearch = async () => {
    const filteredMovies = dataToFilterMovie.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchField.toLowerCase()) ||
        item.description.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    const datasMovie = [];

    if (filteredMovies.length % 8 === 0) {
      for (let i = 0; i < filteredMovies.length; i++) {
        const subArray = filteredMovies.slice(i, i + 8);
        datasMovie.push(subArray);
        i += 7;
      }
    } else {
      for (let i = 0; i < filteredMovies.length; i++) {
        const subArray = filteredMovies.slice(i, i + 8);
        datasMovie.push(subArray);
        i += 7;
      }
    }
    createData(datasMovie);

    const filteredSeries = dataToFilterSerie.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchField.toLowerCase()) ||
        item.description.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    const datasSerie = [];

    if (filteredSeries.length % 8 === 0) {
      for (let i = 0; i < filteredSeries.length; i++) {
        const subArray = filteredSeries.slice(i, i + 8);
        datasSerie.push(subArray);
        i += 7;
      }
    } else {
      for (let i = 0; i < filteredSeries.length; i++) {
        const subArray = filteredSeries.slice(i, i + 8);
        datasSerie.push(subArray);
        i += 7;
      }
    }
    createSerie(datasSerie);
  };

  const handleChangeYear = (e) => {
    setSearchYear(e.target.value);
  };

  const handleSearchYear = () => {
    const filteredMoviesYear = dataToFilterMovie.filter((item) => {
      return item.releaseYear.toString().includes(searchYear.toString());
    });

    const datasMovieYear = [];

    if (filteredMoviesYear.length % 8 === 0) {
      for (let i = 0; i < filteredMoviesYear.length; i++) {
        const subArray = filteredMoviesYear.slice(i, i + 8);
        datasMovieYear.push(subArray);
        i += 7;
      }
    } else {
      for (let i = 0; i < filteredMoviesYear.length; i++) {
        const subArray = filteredMoviesYear.slice(i, i + 8);
        datasMovieYear.push(subArray);
        i += 7;
      }
    }
    createData(datasMovieYear);

    const filteredSeriesYear = dataToFilterSerie.filter((item) => {
      return item.releaseYear.toString().includes(searchYear.toString());
    });

    const datasSerieYear = [];

    if (filteredSeriesYear.length % 8 === 0) {
      for (let i = 0; i < filteredSeriesYear.length; i++) {
        const subArray = filteredSeriesYear.slice(i, i + 8);
        datasSerieYear.push(subArray);
        i += 7;
      }
    } else {
      for (let i = 0; i < filteredSeriesYear.length; i++) {
        const subArray = filteredSeriesYear.slice(i, i + 8);
        datasSerieYear.push(subArray);
        i += 7;
      }
    }
    createSerie(datasSerieYear);
  };

  return (
    <div className="filter">
      <Searching
        onChange={handleChange}
        src={"search.png"}
        placeholder={"Name"}
        onClick={handleSearch}
      />
      <Dating
        onChange={handleChangeYear}
        onClick={onClick}
        src={"calendar.png"}
        placeholder={"1920-1998"}
        onClickButton={handleSearchYear}
      />
    </div>
  );
};

export default Filter;
