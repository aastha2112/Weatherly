import React from "react";

const Header = () => {
  return (
    <div
      className="relative text-white max-w-2/3 h-20 my-11 mx-auto left-[100px] px-8 flex justify-between items-center bg-[rgba(255,255,255,0.2)] backdrop-filter-[blur(10px)] border-1 border-[rgba(255,255,255,0.2)] rounded-sm shadow-2xl

"
    >
      <div className="flex items-center gap-2 text-2xl">
        <ion-icon name="location-outline"></ion-icon>
        <span className="text-xl">New Delhi, India</span>
      </div>
      <div className="relative ">
        <ion-icon
          name="search-outline"
          className="absolute top-[25%] right-[5%] translate-[-5%, -50%] flex text-2xl"
        ></ion-icon>
        <input
          type="text"
          placeholder="Search here"
          className="min-w-[600px] py-3 px-2.5 bg-[rgba(0,0,0,0.1)] outline-0 rounded-sm text-white border-1 border-[rgba(255,255,255,0.2)]"
        />
      </div>
      <div className="text-2xl flex items-center gap-3">
        <ion-icon
          name="calendar-outline"
          className="cursor-pointer delay-500 hover:text-[#409ac7]"
        ></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Header;
