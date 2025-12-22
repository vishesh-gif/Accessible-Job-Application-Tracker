import React from "react";
import SideBar from "./components/SideBar.Comp";
import Home from "./pages/Home.Page";

const App = () => {
  return (
    <>
      <div className="w-full flex flex-row h-full gap-2">
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
