import React from "react";
import sunCloudy from "../../assets/sunny-cloudy.png";
import { WiStrongWind, WiDegrees } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import Search from "./Search";

const Dashboard = ({ weather }) => {
  console.log(weather.main);

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen px-6">
      {/* Location & Date */}
      <Search />
      <h2 className="text-3xl font-semibold">New Delhi</h2>
      <h3 className="uppercase text-gray-300 text-lg mt-1">Monday 7:00 AM</h3>

      {/* Weather Icon */}
      <img src={sunCloudy} alt="sunny" className="h-32 my-6" />

      {/* Temperature */}
      <h3 className="text-6xl font-semibold">
        {weather?.main?.temp.toFixed(1)}
        <span className="align-super text-4xl">°C</span>
      </h3>

      {/* Greeting */}
      <h3 className="text-xl mt-3 text-gray-200">Good Morning</h3>
      <h3 className="text-xl font-semibold">Aastha</h3>

      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-6 mt-8 bg-white/10 p-6 rounded-xl w-full max-w-md">
        <div className="flex flex-col items-center">
          <ion-icon
            name="sunny-outline"
            class="text-yellow-400 text-4xl"
          ></ion-icon>
          <h2 className="text-lg mt-2">Sunrise</h2>
          <h1 className="text-sm font-semibold">7:00 AM</h1>
        </div>
        <div className="flex flex-col items-center">
          <WiStrongWind className="text-blue-400 text-4xl" />
          <h2 className="text-lg mt-2">Wind</h2>
          <h1 className="text-sm font-semibold">4 m/s</h1>
        </div>
        <div className="flex flex-col items-center">
          <CiTempHigh className="text-red-400 text-4xl" />
          <h2 className="text-lg mt-2">Temp</h2>
          <h1 className="text-sm font-semibold flex items-center">23 °C</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
