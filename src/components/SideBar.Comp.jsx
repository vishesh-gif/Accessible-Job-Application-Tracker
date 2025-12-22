import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { BsDatabaseFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
const SideBar = () => {
  const ListItem = [
    { text: "All", icon: <BsDatabaseFill /> },
    { text: "Applied", icon: <FaPaperPlane /> },
    { text: "Interview", icon: <IoIosChatboxes /> },
    { text: "Offer", icon: <FaHandshakeSimple /> },
    { text: "Rejected", icon: <ImCross /> },
  ];
  return (
    <div className="flex flex-col gap-7 justify-center p-3">
      <div className="flex items-center justify-center gap-2 mt-5">
        <MdOutlineWork className="text-4xl" />
        <h1 className="font-semibold text-2xl">Job Tracker</h1>
      </div>
      <hr className="border-0 border-t border-[#4571b8]" />

      <div className="text-center">
        <button className="bg-[#2d73df] px-8 font-semibold rounded-md shadow-2xl py-3">
          + Add Application
        </button>
      </div>

      <hr className="border-0 border-t border-[#4571b8]" />

      <div className="font-semibold">
        <h2 className=" pl-2 text-lg">Filter by Status</h2>
        <ul className="flex flex-col gap-2 pt-2">
          {ListItem.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 pl-3 text-[16px]"
            >
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-0 border-t border-[#4571b8]" />
      <div className="flex items-center text-center">
        <label
          className="bg-white text-black py-3 rounded-l text-md px-3"
          htmlFor="input"
        >
          <IoSearch />
        </label>
        <input
          className="bg-white placeholder:text-gray-400 placeholder:text-md placeholder:font-semibold
          rounded-l-0
          rounded-r py-2 outline-0 
          text-black h-10
          "
          placeholder="Search..."
          type="text"
        />
      </div>
    </div>
  );
};

export default SideBar;
