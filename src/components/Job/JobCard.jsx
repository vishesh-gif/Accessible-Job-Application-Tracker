import React from "react";
import { Link } from "react-router-dom";
import JobCardImg from "./JobCardImg";

const JobCard = ({ job, background }) => {
  const { $id, status, appliedDate, location } = job;

  const formatted = new Date(appliedDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="bg-white p-3 mb-3 rounded shadow-2xl gap-3 flex flex-col">
      <JobCardImg job={job} />
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
