import React from "react";

const JobCard = ({ job }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        {job.companyLogoUrl ?
          <img
            src={job.companyLogoUrl}
            loading="lazy"
            className="w-12"
            alt={job.companyName}
          />
        : <h1 className="text-2xl font-semibold">{job.companyName}</h1>}
      </div>
      <h4 className="font-bold text-sm text-black mb-1">{job.role}</h4>
      <hr className="border-0 border-t border-[#c1c7d1] " />
    </div>
  );
};

export default JobCard;
