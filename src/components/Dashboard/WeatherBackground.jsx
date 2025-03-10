import React from "react";
import { motion } from "framer-motion";

const WeatherBackground = ({ weather }) => {
  const renderAnimation = () => {
    switch (weather) {
      case "Clouds":
        return (
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gray-300 rounded-full"
                style={{ width: "100px", height: "50px", top: `${i * 20}%` }}
                animate={{ x: ["-100vw", "100vw"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
            ))}
          </motion.div>
        );
      case "Rain":
        return (
          <motion.div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-400 w-1 h-6"
                style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                animate={{ y: ["-10%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            ))}
          </motion.div>
        );
      case "Thunderstorm":
        return (
          <motion.div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-yellow-400 w-1 h-16"
                style={{ left: `${Math.random() * 100}%`, top: "10%" }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.2, delay: i * 2 }}
              />
            ))}
          </motion.div>
        );
      case "Snow":
        return (
          <motion.div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full w-2 h-2"
                style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
                animate={{ y: ["-10%", "100%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
            ))}
          </motion.div>
        );
      case "Mist":
      case "Haze":
        return (
          <motion.div
            className="absolute inset-0 bg-gray-400 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
          />
        );
      case "Clear":
        return (
          <motion.div className="absolute inset-0 flex justify-center items-end">
            <motion.div
              className="w-20 h-20 bg-yellow-400 rounded-full"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return <div className="absolute inset-0">{renderAnimation()}</div>;
};

export default WeatherBackground;
