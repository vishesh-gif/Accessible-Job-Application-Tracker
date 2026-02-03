import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { searchApplication } from "../../Redux/applicationSlice";

const SidebarSearchComponent = ({ className }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSearch = () => {
    dispatch(searchApplication(input));
  };
  useEffect(() => {
    handleSearch();
  }, [input, setInput]);
  return (
    <div className="flex items-center w-full h-9 sm:h-10 lg:h-12">
      {/* Input */}
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search by company name"
        className={`${className} w-full
      bg-white text-black
      px-3 py-2
      rounded
      outline-none 
      text-xs sm:text-sm lg:text-base
      placeholder:text-gray-400
      focus:ring-2 focus:ring-[#2d73df]
      transition
    `}
      />
    </div>
  );
};

export default SidebarSearchComponent;
