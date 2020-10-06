import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Navbar />
    </div>
  );
}

export default App;
