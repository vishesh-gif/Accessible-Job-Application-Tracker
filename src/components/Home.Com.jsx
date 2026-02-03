import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard.page";
import { Outlet } from "react-router-dom";
import applicationService from "../appwrite/application";
import { addApplication } from "../Redux/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state) => state.profileStatus?.userData?.user.$id,
  );
  const applicationUpdate = useSelector(
    (state) => state.addApplication.reFetch,
  );

  const getApplications = async () => {
    try {
      if (!userId) return;
      const response = await applicationService.getApplications(userId);
      if (response?.documents) {
        dispatch(addApplication(response.documents));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getApplications();
  }, [userId, applicationUpdate]);
  return (
    <div className="w-full min-h-screen flex flex-col px-3 sm:px-6 lg:px-8">
      {/* Navbar */}
      <section>
        <Navbar />
      </section>

      <hr className="my-3 border-0 border-t border-[#e0e1e2]" />

      {/* Main Content */}
      <section className="mt-4 sm:mt-6 bg-[#f5f6fb] rounded-md p-3 sm:p-4 lg:p-6">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
