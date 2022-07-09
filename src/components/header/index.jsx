import React from "react";
import Separator from "../../shared/separator";
import NavFilter from "./navFilter";
import NavLink from "./navLink";
import NavLogin from "./navLogin";
import TrialMessage from "./trialMessage";
import "./styles.scss";
import { useRouter } from "../../hooks/useRouter";

const Header = () => {
  const { gotoHome, gotoMovies, gotoSeries } = useRouter();
  return (
    <div className="header">
      <div className="header__links">
        <div className="header__links__logo">
          <img
            className="header__links__logo__img"
            src="logo.jpeg"
            alt=""
            onClick={gotoHome}
          />
        </div>
        <NavLink src="movies.png" text={"Movies"} onClick={gotoMovies} />
        <NavLink src="series.png" text={"Series"} onClick={gotoSeries} />
      </div>
      <div className="header__utils">
        <Separator />
        <NavFilter src={"filter.png"} text="Filters" />
        <Separator />
        <NavLogin src={"login.png"} text="Login" />
        <Separator />
        <TrialMessage text={"Star you free trail"} />
      </div>
    </div>
  );
};

export default Header;
