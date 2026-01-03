import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
const SidebarLinksBtn = () => {
  return (
    <div className="flex flex-col gap-4 p-1">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center hover:bg-[#497ddb] rounded py-1 px-2 gap-2 text-lg `
        }
      >
        <span>
          <MdOutlineWork />
        </span>{" "}
        Dashboard
      </NavLink>
      {/*  */}
      <NavLink
        to="profile"
        className={({ isActive }) =>
          `flex items-center hover:bg-[#497ddb] rounded py-1 px-2 gap-2 text-lg `
        }
      >
        <span>
          <IoPersonSharp />
        </span>{" "}
        Profile
      </NavLink>
      {/*  */}
      <NavLink
        to=""
        className={({ isActive }) =>
          `flex items-center hover:bg-[#497ddb] rounded py-1 px-2 gap-2 text-lg `
        }
      >
        <span>
          <IoMdSettings />
        </span>
        Settings
      </NavLink>
    </div>
  );
};

export default SidebarLinksBtn;
