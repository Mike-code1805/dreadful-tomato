import React, { useContext, useState } from "react";
import DataContext from "../../../context/DataContext";
import dataOnlyMovie from "../../../shared/data/dataOnlyMovie";
import Dating from "./dating";
import Searching from "./searching";
import "./styles.scss";

const Filter = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const dataToFilter = dataOnlyMovie();
  const { createData } = useContext(DataContext);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearch = async () => {
    const filteredMovies = dataToFilter.filter((item) => {
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
        onClick={onClick}
        src={"calendar.png"}
        placeholder={"1920-1998"}
      />
    </div>
  );
};

export default Filter;
