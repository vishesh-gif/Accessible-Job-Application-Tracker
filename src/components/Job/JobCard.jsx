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
    <div className="bg-white p-3 sm:p-4 mb-3 rounded-lg shadow-md flex flex-col gap-3">
      <JobCardImg job={job} />

      {/* Meta Info */}
      <div className="flex flex-col text-gray-600 text-center sm:text-left">
        <h4 className="text-xs sm:text-sm">
          {status} : <span>{formatted}</span>
        </h4>
        <p className="text-xs font-semibold">{location}</p>
      </div>

      {/* Action */}
      <div className="mt-1">
        <Link
          to={`job-detail/${$id}`}
          className={`${background} block w-full text-center py-2 text-sm sm:text-base text-white font-semibold rounded-md`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
