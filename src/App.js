import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import { fetchWeather } from "./services/fetchWeather";
import "./styles/App.css";

function App() {
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState({});

  const getDefault = async () => {
    const WeatherData = await fetchWeather("London");
    setDefaultData(WeatherData);
  };

  useEffect(() => {
    getDefault();
  }, []);

  const getData = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <Weather data={data} defaultData={defaultData} />
      <Navbar getData={getData} defaultData={defaultData} />
    </div>
  );
}

export default App;
