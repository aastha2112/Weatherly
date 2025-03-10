import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("delhi");
  const handleSearch = (newCity) => {
    setCity(newCity);
  };
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},in&APPID=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <>
      <Dashboard weather={weather} onSearch={handleSearch} />
    </>
  );
};

export default App;
