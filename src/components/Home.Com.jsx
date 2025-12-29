import React from "react";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard.page";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col sm:px-8">
      <section className="">
        <Navbar />
      </section>
      <hr className="border-0 border-t border-[#e0e1e2]" />
      <section className="mt-8 ml-2 bg-[#f5f6fb] rounded">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
