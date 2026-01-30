import React from "react";
import { useSelector } from "react-redux";
import JobRow from "./JobRow";

const JobDashBoard = () => {
  const { filteredApplications, application } = useSelector(
    (state) => state.addApplication,
  );
  const statusCardItem = [
    { title: "Applied", backGround: "bg-[#7babea]" },
    { title: "Interview", backGround: "bg-[#bfc44c]" },
    { title: "Offer", backGround: "bg-[#3ba3ab]" },
    { title: "Rejected", backGround: "bg-[#ee5d61]" },
  ];

  return (
    <div className="flex overflow-x-scroll gap-6">
      {statusCardItem.map((item) => {
        const filterJob = filteredApplications.filter(
          (job) => job.status === item.title,
        );
        return <JobRow key={filterJob.$id} item={item} jobs={filterJob} />;
      })}
    </div>
  );
};

export default JobDashBoard;
