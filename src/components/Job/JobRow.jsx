import React from "react";
import JobCard from "./JobCard";

const JobRow = ({ item, jobs }) => {
  const { title, backGround } = item;
  return (
    <div className="w-[160px] sm:w-[180px] lg:w-[210px] shrink-0">
      {/* Header */}
      <div className="mb-3">
        <h1
          className={`${backGround} px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg lg:text-xl rounded text-white text-center`}
        >
          {title}
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <JobCard key={job.$id} job={job} background={backGround} />
        ))}
      </div>
    </div>
  );
};

export default JobRow;
