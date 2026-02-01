import React from "react";
import { useLocation } from "react-router-dom";
import EditJobForm from "../components/jobApplicationComponent/EditJobForm";
const EditJobPage = () => {
  const { state } = useLocation();
  const jobData = state?.jobData;

  return <EditJobForm jobData={jobData} />;
};

export default EditJobPage;
