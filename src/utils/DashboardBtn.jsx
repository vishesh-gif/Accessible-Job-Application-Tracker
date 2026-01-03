import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
const DashboardBtn = () => {
  return (
    <div className={` bg-[#efeffa] px-6 h-14 flex items-center`}>
      <NavLink
        to="/"
        className="font-semibold text-[#1153c1] flex items-center gap-3 hover:opacity-80"
      >
        <FaArrowLeftLong />
        Back to Dashboard
      </NavLink>
    </div>
  );
};

export default DashboardBtn;
