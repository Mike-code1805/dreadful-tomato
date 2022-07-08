import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <img src="logo.jpeg" />
      </div>
      <div className="header__links">
        <div>Movies</div>
        <div>Series</div>
      </div>
    </div>
  );
};

export default Header;
