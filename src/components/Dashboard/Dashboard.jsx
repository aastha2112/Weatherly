import React, { useEffect, useState } from "react";
import defaultWeather from "../../assets/default.png";
import hazeAndMist from "../../assets/hazeAndMist.png";
import partlyCloudy from "../../assets/partlyCloudy.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import sunny from "../../assets/sunny.png";

import { WiStrongWind, WiDegrees } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import Search from "./Search";

const Dashboard = ({ weather, onSearch }) => {
  console.log(weather);

  const [weatherEffect, setWeatherEffect] = useState(null);
  // useEffect(() => {
  //   if (!weather || !weather.weather) return;

  //   const weatherCondition = weather.weather[0].main;
  //   switch (weatherCondition) {
  //     case "Clear":
  //       setWeatherEffect("cloud-animation");
  //       break;
  //     case "clouds":
  //       setWeatherEffect("cloud-animation");
  //       break;
  //     case "Rain":
  //       setWeatherEffect("rain-animation");
  //       break;
  //     case "Snow":
  //       setWeatherEffect("snow-animation");
  //       break;
  //     case "Mist":
  //     case "Haze":
  //       setWeatherEffect("mist-animation");
  //       break;
  //     default:
  //       setWeatherEffect("cloud-animation");
  //   }
  // }, [weather]);

  const dateNow = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} AM`;
  };

  const today = (timestamp) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(timestamp * 1000);
    const day = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${hours}:${minutes} ${hours > 11 ? "PM" : "AM"}`;
  };

  const getWeatherImage = () => {
    switch (weather?.weather?.[0]?.main) {
      case "Clear":
        return sunny;
      case "Clouds":
        return partlyCloudy;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Mist":
      case "Haze":
        return hazeAndMist;
      default:
        return defaultWeather;
    }
  };

  // const getWeatherCondition = (weather) => {
  //   if (!weather || !weather.weather) return "clear";

  //   const condition = weather.weather[0]?.main.toLowerCase();
  //   console.log(condition);

  //   if (condition.includes("cloud")) return "cloudy";
  //   if (condition.includes("rain")) return "rain";
  //   if (condition.includes("snow")) return "snow";
  //   if (condition.includes("haze") || condition.includes("haze")) return "mist";
  //   return "clear";
  // };

  return (
    <div className=" text-white flex flex-col items-center justify-center min-h-screen px-6">
      {/* Background Effects */}

      {/* Location & Date */}
      <Search onSearch={onSearch} />
      <h2 className="text-3xl font-semibold">{weather?.name}</h2>
      <h3 className="uppercase text-gray-300 text-lg mt-1">
        {today(weather?.dt)}{" "}
      </h3>
      {/* Weather Icon */}
      <img src={getWeatherImage()} alt="sunny" className="h-50 my-6" />

      {/* Temperature */}
      <h3 className="text-6xl font-semibold">
        {weather?.main?.temp.toFixed(1)}
        <span className="align-super text-4xl">°C</span>
      </h3>
      <h3 className="text-xl mt-3 text-gray-200">
        Feels like {weather?.main?.feels_like}°C
      </h3>
      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-6 mt-8 bg-white/10 p-6 rounded-xl w-full max-w-md">
        <div className="flex flex-col items-center">
          <ion-icon
            name="sunny-outline"
            class="text-yellow-400 text-4xl"
          ></ion-icon>
          <h2 className="text-lg mt-2">Sunrise</h2>
          <h1 className="text-xs ">{dateNow(weather?.sys?.sunrise)}</h1>
        </div>
        <div className="flex flex-col items-center">
          <WiStrongWind className="text-blue-400 text-4xl" />
          <h2 className="text-lg mt-2">Wind</h2>
          <h1 className="text-xs ">{weather?.wind?.speed} m/s</h1>
        </div>
        <div className="flex flex-col items-center">
          <CiTempHigh className="text-red-400 text-4xl" />
          <h2 className="text-lg mt-2">Humidity</h2>
          <h1 className="text-xs  flex items-center">
            {weather?.main?.humidity} %
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
