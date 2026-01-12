import React from "react";
import StatusCard from "../components/StatusCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.addApplication.application);
  console.log(data);
  const statusCardItem = [
    { title: "Applied", backGround: "bg-[#7babea]" },
    { title: "Interview", backGround: "bg-[#bfc44c]" },
    { title: "Offer", backGround: "bg-[#3ba3ab]" },
    { title: "Rejected", backGround: "bg-[#ee5d61]" },
  ];

  return (
    <div className="flex overflow-x-scroll gap-6">
      {statusCardItem.map((item, index) => {
        const filterJob = data.filter((job) => job.status === item.title);
        return <StatusCard key={index} item={item} jobs={filterJob} />;
      })}
    </div>
  );
};

export default Dashboard;
