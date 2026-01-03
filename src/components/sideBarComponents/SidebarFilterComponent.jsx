import React from "react";

import { BsDatabaseFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const SidebarFilterComponent = () => {
  const ListItem = [
    { text: "All", icon: <BsDatabaseFill /> },
    { text: "Applied", icon: <FaPaperPlane /> },
    { text: "Interview", icon: <IoIosChatboxes /> },
    { text: "Offer", icon: <FaHandshakeSimple /> },
    { text: "Rejected", icon: <ImCross /> },
  ];
  return (
    <div className="font-semibold">
      <h2 className=" pl-2 sm:text-sm md:text-lg">Filter by Status</h2>
      <ul className="flex flex-col gap-2 pt-2">
        {ListItem.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 pl-3 sm:text-[12px] md:text-[12px] lg:text-[16px]"
          >
            <span>{item.icon}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarFilterComponent;
