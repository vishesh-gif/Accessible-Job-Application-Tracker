import React, { useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
const SideBar = () => {
  const ListItem = [
    { text: "All", icon: <BsDatabaseFill /> },
    { text: "Applied", icon: <FaPaperPlane /> },
    { text: "Interview", icon: <IoIosChatboxes /> },
    { text: "Offer", icon: <FaHandshakeSimple /> },
    { text: "Rejected", icon: <ImCross /> },
  ];
  const location = useLocation();

  return (
    <div className="flex flex-col sm:gap-5 md:gap-7 justify-center  sm:p-1 md:p-3">
      <div className="flex items-center justify-center  gap-1 md:gap-2 mt-5">
        <MdOutlineWork className=" md:text-xl lg:text-xl xl:text-4xl" />
        <h1 className="font-semibold text-xs md:text-sm   lg:text-xl xl:text-2xl">
          Job Tracker
        </h1>
      </div>
      <hr className="border-0 border-t border-[#4571b8]" />

      <div className="text-center">
        {location.pathname !== "/add-application" ? (
          <NavLink
            to="add-application"
            className="bg-[#2d73df] px-1 sm:text-xs md:text-sm lg-text-md lg:px-8 font-semibold rounded-md shadow-2xl py-1 lg:py-3 cursor-pointer"
          >
            + Add Application
          </NavLink>
        ) : (
          <NavLink
            to="/"
            className="bg-[#2d73df] px-1 sm:text-xs md:text-sm lg-text-md lg:px-8 font-semibold rounded-md shadow-2xl py-1 lg:py-3 cursor-pointer"
          >
            Back To Dashboard
          </NavLink>
        )}
      </div>

      <hr className="border-0 border-t border-[#4571b8]" />

      <div className="font-semibold">
        <h2 className=" pl-2 sm:text-sm md:text-lg">Filter by Status</h2>
        <ul className="flex flex-col gap-2 pt-2">
          {ListItem.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 pl-3 sm:text-[12px] md:text-[12px] lg:text-[16px]"
            >
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-0 border-t border-[#4571b8]" />
      <div className="flex items-center text-center sm:h-6 md:h-10">
        <label
          className="bg-white text-black sm:py-1 lg:py-3 rounded-l sm:text-sm md:text-md sm:px-2 md:px-1.5 lg:px-3 h-full"
          htmlFor="input"
        >
          <IoSearch />
        </label>
        <input
          className="bg-white w-full placeholder:text-gray-400 md:placeholder:text-md sm:placeholder:text-xs lg:placeholder:text-lg placeholder:font-semibold
          rounded-l-0
          rounded-r sm:py-1 md:py-2 outline-0 
          text-black h-full
          "
          placeholder="Search..."
          type="text"
        />
      </div>
    </div>
  );
};

export default SideBar;
