import React from "react";
import "../styles/Weather.css";

function Weather({ data }) {
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
            {data.main ? Math.round(data?.main?.temp) : "08"} <sup>°</sup>
          </h1>
        </div>
        <div className="weather__city">
          <h1>{data.main ? data.name : "London"}</h1>
          <sub>06:09 - Sunday, 6 Oct '19</sub>
        </div>
        <div className="weather__logo">
          <img
            src={
              data.main
                ? `https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`
                : "null"
            }
            alt="icon"
          />
          <sub>{data.weather?.[0].description}</sub>
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
