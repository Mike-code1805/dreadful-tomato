import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Movies from "../components/movies";
import MyContext from "../context/DataContext";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
};

export default MoviesPage;
