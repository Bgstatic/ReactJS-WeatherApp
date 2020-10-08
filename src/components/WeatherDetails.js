import React from "react";
import "../styles/WeatherDetails.css";

function WeatherDetails() {
  return (
    <div className="navbar__details__container">
      <div className="navbar__details__title">
        <div className="title">
          <h3>Weather Details</h3>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar__details__cloudy">
        <div className="cloudy">
          <h3>Cloudy</h3>
        </div>
        <span></span>
        <span></span>
        <div className="cloudy__value">
          <h3>86%</h3>
        </div>
      </div>
      <div className="navbar__details__Humidity">
        <div className="humidity">
          <h3>Humidity</h3>
        </div>
        <span></span>
        <span></span>
        <div className="humidity__value">
          <h3>62%</h3>
        </div>
      </div>
      <div className="navbar__details__Wind">
        <div className="wind">
          <h3>Wind</h3>
        </div>
        <span></span>
        <span></span>
        <div className="wind__value">
          <h3>8km/h</h3>
        </div>
      </div>
      <div className="navbar__details__Rain">
        <div className="rain">
          <h3>Rain</h3>
        </div>
        <span></span>
        <span></span>
        <div className="rain__value">
          <h3>8mm</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
