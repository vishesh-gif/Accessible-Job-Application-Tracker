import React from "react";
import { useSelector } from "react-redux";
import JobRow from "./JobRow";

const JobDashBoard = () => {
  const { filteredApplications, application } = useSelector(
    (state) => state.addApplication,
  );

  const sourceData =
    filteredApplications.length > 0 ? filteredApplications : application;

  const statusCardItem = [
    { title: "Applied", backGround: "bg-[#7babea]" },
    { title: "Interview", backGround: "bg-[#bfc44c]" },
    { title: "Offer", backGround: "bg-[#3ba3ab]" },
    { title: "Rejected", backGround: "bg-[#ee5d61]" },
  ];

  return (
    <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
      {statusCardItem.map((item, index) => {
        const filterJob = sourceData.filter((job) => job.status === item.title);

        return (
          <div key={index} className="snap-start shrink-0">
            <JobRow item={item} jobs={filterJob} />
          </div>
        );
      })}
    </div>
  );
};

export default JobDashBoard;
