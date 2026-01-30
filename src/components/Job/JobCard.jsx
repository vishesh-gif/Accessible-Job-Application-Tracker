import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, background }) => {
  const {
    $id,
    companyName,
    role,
    status,
    appliedDate,
    location,
    companyLogoUrl,
  } = job;

  const formatted = new Date(appliedDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="bg-white p-3 mb-3 rounded shadow-2xl gap-3 flex flex-col">
      <div>
        <div className="flex items-center gap-3">
          {companyLogoUrl ?
            <img src={companyLogoUrl} className="w-12" alt="" />
          : <h1 className="text-2xl font-semibold">{companyName}</h1>}
        </div>
        <h4 className="font-bold text-sm text-black mb-1">{role}</h4>
        <hr className="border-0 border-t border-[#c1c7d1] " />
      </div>

      <div className="flex flex-col text-gray-600">
        <h4 className="text-sm ">
          {status} : <span>{formatted}</span>
        </h4>
        <p className="text-xs font-semibold"> | {location}</p>
      </div>

      <div className="text-center">
        <Link
          to={`job-detail/${$id}`}
          className={`w-45 ${background} py-2 text-white font-semibold rounded  px-2`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
