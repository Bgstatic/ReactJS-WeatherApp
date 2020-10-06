import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="weather__navbar">
      <div className="weather__input__container">
        <Input className="navbar__input" placeholder="Another Location" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__cities__container">
        <div className="cities">
          <h3>Birmingham</h3>
          <h3>Manchester</h3>
          <h3>New York</h3>
          <h3>California</h3>
          <hr />
        </div>
      </div>
      <div className="navbar__details">
        <div className="navbar__details__cloud"></div>
      </div>
    </div>
  );
}

export default Navbar;
