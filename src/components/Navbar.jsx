import React from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBarLayout } from "../Redux/profileSlice";
const Navbar = () => {
  const imgUrl = useSelector((state) => state.profileStatus?.userData?.userImg);
  const dispatch = useDispatch();
  return (
    <nav className="h-auto min-h-[64px] flex items-center justify-between px-3 sm:px-0">
      {/* Title */}
      <GiHamburgerMenu
        onClick={() => dispatch(SideBarLayout())}
        className="text-lg sm:hidden"
      />
      <h1 className="text-md sm:text-xl lg:text-[26px] text-[#3b4562] font-semibold">
        Job Application Tracker
      </h1>

      {/* Profile Section */}
      <div className="flex items-center gap-3 sm:gap-5">
        <Link
          to="profile"
          className="border border-dashed border-gray-500 rounded-full p-1"
        >
          {imgUrl ?
            <img
              src={imgUrl}
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-gray-500 object-cover"
              alt="profile"
            />
          : <CgProfile className="text-2xl sm:text-3xl text-gray-500" />}
        </Link>

        {/* Hide name on small screens */}
        <p className="hidden sm:block text-sm lg:text-lg font-semibold text-[#3b4562]">
          John Doe
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
