import React from "react";
import JobDashBoard from "../components/Job/JobDashBoard";
import DashboardTopBar from "../components/Job/DashboardTopBar";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Top Controls (never hidden) */}
      <DashboardTopBar />

      {/* Dashboard */}
      <JobDashBoard />
    </div>
  );
};

export default Dashboard;
