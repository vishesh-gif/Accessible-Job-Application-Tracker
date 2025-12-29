import React from "react";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="h-24 flex justify-between  items-center">
      <h1 className="text-[26px] text-[#3b4562] font-semibold">
        Job Application Tracker
      </h1>
      <div className="flex items-center gap-5 p-2">
        <CgProfile className="text-3xl text-gray-500" />
        <p className="text-lg font-semibold text-[#3b4562]">John Doe</p>
      </div>
    </nav>
  );
};

export default Navbar;
