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
      <div className="navbar__details__container">
        <div className="navbar__details__title">
          <div className="title">
            <h3>Weather Details</h3>
          </div>
          <div className="arrange"></div>
        </div>
        <div className="navbar__details__cloudy">
          <div className="cloudy">
            <h3>Cloudy</h3>
          </div>
          <div className="cloudy__value">
            <h3>86%</h3>
          </div>
        </div>
        <div className="navbar__details__Humidity">
          <div className="humidity">
            <h3>Humidity</h3>
          </div>
          <div className="humidity__value">
            <h3>62%</h3>
          </div>
        </div>
        <div className="navbar__details__Wind">
          <div className="wind">
            <h3>Wind</h3>
          </div>
          <div className="wind__value">
            <h3>8km/h</h3>
          </div>
        </div>
        <div className="navbar__details__Rain">
          <div className="rain">
            <h3>Rain</h3>
          </div>
          <div className="rain__value">
            <h3>8mm</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
