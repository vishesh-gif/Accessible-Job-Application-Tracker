import React from "react";
import {
  MdDateRange,
  MdLocationOn,
  MdLocalPostOffice,
  MdStickyNote2,
} from "react-icons/md";
import { GiEarthAsiaOceania } from "react-icons/gi";
const RoleInfoSection = ({ data, className }) => {
  const {
    imageUrl,
    companyLogoUrl,
    role,
    status,
    appliedDate,
    location,
    notes,
    minSalary,
    maxSalary,
    companyEmail,
    companyWebsite,
    companyName,
  } = data || {};

  const formatted = new Date(appliedDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <section
      className={`${className} "flex flex-col shadow-2xl rounded-md  bg-[#f7f6fc] p-4 gap-3 border-zinc-200 border"`}
    >
      <div className="flex items-center justify-between">
        <div className="p1">
          {companyLogoUrl ?
            <img src={companyLogoUrl} className="w-20 rounded-2xl" alt="" />
          : <h1 className="text-3xl mb-2 font-semibold">{companyName}</h1>}

          <h2 className="text-lg font-semibold">{role}</h2>
        </div>
        <div>
          <p className="px-3 py-2 rounded-lg text-sm bg-green-100">{status}</p>
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
            Applied Date :{" "}
            <span className="text-black font-semibold">{formatted}</span>
          </li>
          <li className="flex gap-2 items-center px-2 ">
            {" "}
            <span>
              <MdLocationOn />
            </span>{" "}
            Location :{" "}
            <span className="text-black font-semibold">{location}</span>
          </li>
          <li className="flex gap-2 items-center px-2 ">
            <span>
              <GiEarthAsiaOceania />
            </span>{" "}
            Website :{" "}
            <span className="text-black font-semibold">{companyWebsite}</span>
          </li>
          <li className="flex gap-2 items-center px-2 ">
            <span>
              <MdLocalPostOffice />
            </span>{" "}
            Salary : ${minSalary} - ${maxSalary}
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
        <p className="px-2 text-md text-gray-800 min-w-[360px]">
          {/* Had Phone screen on march 25th. Next round of interviews scheduled for
          April 5th. */}
          {notes || null}
        </p>
      </div>
    </section>
  );
};

export default RoleInfoSection;
