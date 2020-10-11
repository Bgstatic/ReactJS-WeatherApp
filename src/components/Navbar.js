import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import { fetchWeather } from "../services/fetchWeather";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Navbar.css";

function Navbar({ getData, defaultData }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const WeatherData = await fetchWeather(query);
      setWeather(WeatherData);
      setQuery("");
    }
  };
  getData(weather);
  return (
    <div className="weather__navbar">
      <div className="weather__input__container">
        <Input
          className="navbar__input"
          placeholder="Another Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__cities__container">
        <div className="cities">
          <h3>Birmingham</h3>
          <h3>Manchester</h3>
          <h3>New York</h3>
          <h3>California</h3>
        </div>
        <div className="arrange__cities"></div>
      </div>
      <WeatherDetails weather={weather} defaultData={defaultData} />
    </div>
  );
}

export default Navbar;
