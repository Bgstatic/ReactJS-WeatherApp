import React from "react";
import "../styles/Weather.css";

function Weather() {
  return (
    <div className="weather__container">
      <div className="the__weather__section">
        <div className="the__weather__title">
          <h4>the.weather</h4>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="weather__info">
        <span></span>
        <div className="weather__degree">
          <h1>
            08 <sup>°</sup>
          </h1>
        </div>
        <div className="weather__city">
          <h1>London</h1>
          <sub>06:09 - Sunday, 6 Oct '19</sub>
        </div>
        <div className="weather__logo">
          <img src="https://www.flaticon.com/svg/static/icons/svg/2948/2948175.svg" />
          <sub>Rainy</sub>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Weather;
