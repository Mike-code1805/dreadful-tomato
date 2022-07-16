import React from "react";
import { useRouter } from "../../hooks/useRouter";
import ImageHome from "./imageHome";
import "./styles.scss";

const Home = () => {
  const { gotoMovies, gotoSeries } = useRouter();
  return (
    <div className="home">
      <ImageHome
        text={"Movies"}
        onClick={gotoMovies}
        src="https://raw.githubusercontent.com/khriztianmoreno/Dreadful-Tomatoes-with-React/main/assets/movies.png"
      />
      <ImageHome
        text={"Series"}
        onClick={gotoSeries}
        src="https://raw.githubusercontent.com/khriztianmoreno/Dreadful-Tomatoes-with-React/main/assets/series.png"
      />
    </div>
  );
};

export default Home;
