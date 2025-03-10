import React, { useState } from "react";
import { FaHome, FaSearch, FaUser, FaCloudSun } from "react-icons/fa";
import { MdLogout, MdLogin } from "react-icons/md";

const BottomNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-3 shadow-md">
      <div className="flex justify-around items-center">
        <NavItem icon={<FaHome />} label="Home" />
        <NavItem icon={<FaSearch />} label="Search" />
        <NavItem icon={<FaCloudSun />} label="Forecast" />
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="flex flex-col items-center"
        >
          {isLoggedIn ? <MdLogout size={24} /> : <MdLogin size={24} />}
          <span className="text-xs">{isLoggedIn ? "Logout" : "Login"}</span>
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label }) => (
  <button className="flex flex-col items-center">
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

export default BottomNavbar;
