import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const imgUrl = useSelector((state) => state.profileStatus?.userData?.userImg);
  console.log(imgUrl);

  return (
    <nav className="h-24 flex justify-between  items-center">
      <h1 className="text-[26px] text-[#3b4562] font-semibold">
        Job Application Tracker
      </h1>
      <div className="flex items-center gap-5 p-2">
        <Link
          to="profile"
          className="border border-dashed border-gray-500 rounded-full p-1"
        >
          {imgUrl ? (
            <img
              src={imgUrl}
              className="w-12 h-12 border border-gray-500 rounded-[100%]"
              alt=""
            />
          ) : (
            <CgProfile className="text-3xl text-gray-500" />
          )}
        </Link>
        <p className="text-lg font-semibold text-[#3b4562]">John Doe</p>
      </div>
    </nav>
  );
};

export default Navbar;
