import React from "react";
import {
  MdDateRange,
  MdLocationOn,
  MdLocalPostOffice,
  MdStickyNote2,
} from "react-icons/md";
import { GiEarthAsiaOceania } from "react-icons/gi";
const RoleInfoSection = () => {
  return (
    <section className="flex flex-col shadow-2xl rounded-md  bg-[#f7f6fc] p-4 gap-3 border-zinc-200 border">
      <div className="flex items-center justify-between">
        <div className="p1">
          <h1 className="text-3xl font-semibold mb-2">Google</h1>
          <h2 className="text-lg font-semibold">FrontEnd Developer</h2>
        </div>
        <div>
          <p className="px-3 py-2 rounded-lg text-sm bg-green-100">Interview</p>
        </div>
      </div>
      <hr className="border-0 border-t my-2 border-[#e0e1e2]" />
      <div className="">
        <h1 className="text-lg font-semibold mb-2">Job Information</h1>
        <ul className="flex flex-col gap-2 text-gray-800">
          <li className="flex gap-2 items-center px-2">
            <span>
              <MdDateRange />
            </span>
            Applied Date : March 20, 2024
          </li>
          <li className="flex gap-2 items-center px-2 ">
            {" "}
            <span>
              <MdLocationOn />
            </span>{" "}
            Location : New York, NY
          </li>
          <li className="flex gap-2 items-center px-2 ">
            <span>
              <GiEarthAsiaOceania />
            </span>{" "}
            Website : www.google.com
          </li>
          <li className="flex gap-2 items-center px-2 ">
            <span>
              <MdLocalPostOffice />
            </span>{" "}
            Salary : $120,000 - $150,000
          </li>
        </ul>
      </div>
      <hr className="border-0 border-t my-2 border-[#e0e1e2]" />
      <div className="">
        <h1 className="flex items-center text-lg gap-1 font-semibold mb-2">
          <span className="text-[#49587e]">
            <MdStickyNote2 />
          </span>{" "}
          Notes
        </h1>
        <p className="px-2 text-md text-gray-800">
          Had Phone screen on march 25th. Next round of interviews scheduled for
          April 5th.
        </p>
      </div>
    </section>
  );
};

export default RoleInfoSection;
