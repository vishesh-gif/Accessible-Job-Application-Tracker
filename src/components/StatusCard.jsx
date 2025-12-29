import React from "react";
import CompanyCard from "./CompanyCard";

const StatusCard = ({ item, jobs }) => {
  const { title, backGround } = item;
  return (
    <div className="w-52">
      <div className="mb-3">
        <h1 className={`${backGround} px-10 py-3 text-xl rounded  text-white`}>
          {title}
        </h1>
      </div>
      <div>
        {jobs.map((job) => (
          <CompanyCard key={job.id} job={job} background={backGround} />
        ))}
      </div>
    </div>
  );
};

export default StatusCard;
