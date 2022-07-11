import React from "react";
import Separator from "../../shared/separator";
import NavFilter from "./navFilter";
import NavLink from "./navLink";
import NavLogin from "./navLogin";
import TrialMessage from "./trialMessage";
import "./styles.scss";
import { useRouter } from "../../hooks/useRouter";
import { useToggle } from "../../hooks/useToggle";
import Calendary from "./calendary";
import Filter from "./filter";

const Header = () => {
  const { gotoHome, gotoMovies, gotoSeries } = useRouter();
  const { open, openCalen, handleToggle, handleToggleCalen } = useToggle();
  return (
    <>
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
          <NavFilter onClick={handleToggle} src={"filter.png"} text="Filters" />
          <Separator />
          <NavLogin src={"login.png"} text="Login" />
          <Separator />
          <TrialMessage text={"Star you free trail"} />
        </div>
      </div>
      {open ? (
        <>
          <Filter onClick={handleToggleCalen} />
          {openCalen ? (
            <>
              <div className="calendary_header">
                <Calendary />
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Header;
