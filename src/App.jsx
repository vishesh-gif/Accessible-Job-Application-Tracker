import React from "react";
import SideBar from "./components/SideBar.Comp";
import Home from "./components/Home.Com";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="w-full flex flex-row h-full">
        <section className="w-[20%] min-h-screen bg-[#2561bb] text-white">
          <SideBar />
        </section>
        <section className="w-[80%]">
          <Home />
        </section>
      </div>
    </>
  );
};

export default App;
