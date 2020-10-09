import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import "./styles/App.css";

function App() {
  const [data, setData] = useState({});

  const getData = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <Weather data={data} />
      <Navbar getData={getData} />
    </div>
  );
}

export default App;
