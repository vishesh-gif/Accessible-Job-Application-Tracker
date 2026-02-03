import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
const AddApplicationBtn = ({ className, btnText }) => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.profileStatus.logInStatus);
  const handleClick = () => {
    if (status) navigate("add-application");
    else toast.error("Please Login to Add Application");
  };

  return (
    <button
      onClick={handleClick}
      className={`${className}
      bg-[#2d73df] text-white font-semibold
      px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3
      text-xs sm:text-sm lg:text-base
      rounded-md shadow-md hover:bg-[#245fc0]
      transition 
    `}
    >
      {btnText || "+ Add Application"}
    </button>
  );
};

export default AddApplicationBtn;
