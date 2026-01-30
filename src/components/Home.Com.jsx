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
    <div className="w-full flex flex-col sm:px-8">
      <section className="">
        <Navbar />
      </section>
      <hr className="border-0 border-t border-[#e0e1e2]" />
      <section className="mt-8 ml-2 p-2 bg-[#f5f6fb] rounded">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
