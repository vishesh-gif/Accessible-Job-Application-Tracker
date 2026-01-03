import React from "react";

import { IoSearch } from "react-icons/io5";

const SidebarSearchComponent = () => {
  return (
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
  );
};

export default SidebarSearchComponent;
