import React from "react";
import Calendary from "../components/calendary";
import Filter from "../components/filter";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Calendary />
      <Footer />
    </div>
  );
};
export default HomePage;
