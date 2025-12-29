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
  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Dev",
      status: "Applied",
      statusText: "Applied",
      date: "Mar 10, 2025",
      location: "New York ,NY",
      btnText: "Move to Interview",
    },
    {
      id: 2,
      company: "Amazon",
      role: "UI Engineer",
      status: "Interview",
      statusText: "Interviewing",
      date: "Api 20, 2025",
      location: " Seattle, Wa",
      btnText: "Schedule Follow-Up",
    },
    {
      id: 3,
      company: "FaceBook",
      role: "React Dev",
      status: "Rejected",
      statusText: "Rejected",
      date: "Mar 15, 2024",
      location: " Redmond,WA",
      btnText: "View Details",
    },
    {
      id: 4,
      company: "Meta",
      role: "React Dev",
      status: "Offer",
      statusText: "Offer Received",
      date: "Mar 15, 2024",
      location: " Redmond,WA",
      btnText: "Accept Offer",
    },
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
