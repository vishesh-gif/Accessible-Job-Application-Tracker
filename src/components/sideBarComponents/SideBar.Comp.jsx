import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineWork } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarSearchComponent from "./SidebarSearchComponent";
import SidebarLinksBtn from "./SidebarLinkBtn";
import { ImCross } from "react-icons/im";
import { SideBarLayout } from "../../Redux/profileSlice";
import AddApplicationBtn from "./AddApplicationBtn";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-2 sm:px-3 py-3 relative ">
      {/* Logo */}
      <button
        onClick={() => {
          navigate("/");
          dispatch(SideBarLayout());
        }}
        className="flex items-center justify-center gap-2 mt-2"
      >
        <MdOutlineWork className="text-lg sm:text-xl lg:text-2xl xl:text-3xl" />
        <h1 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">
          Job Tracker
        </h1>
      </button>
      <ImCross
        onClick={() => dispatch(SideBarLayout())}
        className="sm:hidden absolute top-3 right-4 text-sm"
      />

      <hr className="border-0 border-t border-[#4571b8]" />

      {/* Add Button */}
      <AddApplicationBtn />

      <hr className="border-0 border-t border-[#4571b8]" />

      {/* Conditional Content */}
      {location.pathname === "/" ?
        <div className="flex flex-col gap-4 sm:gap-5">
          <SidebarSearchComponent />
          <hr className="border-0 border-t border-[#4571b8]" />
          <SidebarLinksBtn />
        </div>
      : <SidebarLinksBtn />}
    </div>
  );
};

export default SideBar;
