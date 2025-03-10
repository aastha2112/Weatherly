import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Delhi,in&APPID=${
          import.meta.env.VITE_WEATHER_API
        }&units=metric`
      )
      .then((res) => setWeather(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard weather={weather} />} />
      </Routes>
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
