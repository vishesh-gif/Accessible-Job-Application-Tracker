import React from "react";
import SelectField from "./SelectField";

const CompanyCard = ({ job, background }) => {
  const {
    id,
    company,
    role,
    status,
    appliedDate,
    location,
    statusText,
    btnText,
  } = job;
  return (
    <div className="bg-white p-3 rounded shadow-2xl gap-3 flex flex-col">
      <div>
        <h1 className="text-2xl font-semibold">{company}</h1>
        <h4 className="font-bold text-gray-700 mb-1">{role}</h4>
        <hr className="border-0 border-t border-[#c1c7d1] " />
      </div>

      <div className="flex flex-col text-gray-600">
        <h4 className="text-sm ">
          {statusText} : <span>{appliedDate}</span>
        </h4>
        <p className="text-xs font-semibold"> | {location}</p>
      </div>

      <div className="text-center">
        <button
          className={`w-45 ${background} py-2 text-white font-semibold rounded `}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
