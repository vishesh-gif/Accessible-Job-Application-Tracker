import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineWork } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SidebarFilterComponent from "./SidebarFilterComponent";
import SidebarSearchComponent from "./SidebarSearchComponent";
import SidebarLinksBtn from "./SidebarLinkBtn";
import toast, { Toaster } from "react-hot-toast";
const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const status = useSelector((state) => state.profileStatus.logInStatus);
  const handleClick = () => {
    if (status) navigate("add-application");
    else toast.error("Please Login to Add Application");
  };

  return (
    <div className="flex flex-col sm:gap-5 md:gap-7 justify-center  sm:p-1 md:p-3">
      <div>
        <NavLink
          to="/"
          className="flex items-center justify-center  gap-1 md:gap-2 mt-5"
        >
          <MdOutlineWork className=" md:text-xl lg:text-xl xl:text-4xl" />
          <h1 className="font-semibold text-xs md:text-sm   lg:text-xl xl:text-2xl">
            Job Tracker
          </h1>
        </NavLink>
      </div>
      <hr className="border-0 border-t border-[#4571b8]" />

      <div className="text-center">
        <button
          // to="add-application"
          onClick={() => handleClick()}
          className={`bg-[#2d73df] px-1 sm:text-xs md:text-sm lg:text-md lg:px-8 font-semibold rounded-md shadow-2xl py-1 lg:py-3 cursor-pointer`}
        >
          + Add Application
        </button>
        <Toaster />
      </div>

      <hr className="border-0 border-t border-[#4571b8]" />
      {location.pathname == "/" ? (
        <div className="flex flex-col sm:gap-5 md:gap-7">
          <SidebarFilterComponent />

          <hr className="border-0 border-t border-[#4571b8]" />
          <SidebarSearchComponent />
          <hr className="border-0 border-t border-[#4571b8]" />
          <SidebarLinksBtn />
        </div>
      ) : (
        <SidebarLinksBtn />
      )}
    </div>
  );
};

export default SideBar;
