import React from "react";
import DashboardBtn from "./DashboardBtn";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

import RoleInfoSection from "./RoleInfoSection";
import ActionsSection from "./ActionsSection";
const JobDetail = () => {
  return (
    <div className="mb-3 bg-white">
      <DashboardBtn />
      <section className="flex gap-5  mt-2 ">
        <RoleInfoSection />

        <ActionsSection />
      </section>
      <div className="flex justify-between my-4 bg-white">
        <button className="flex items-center gap-2 text-md font-semibold px-3 py-2 bg-[#e1e5f2] text-[#242f5b] rounded-md">
          <span>
            <FaPencilAlt />
          </span>{" "}
          Edit Job
        </button>
        <button className="flex items-center gap-2 text-md font-semibold px-3 py-2 bg-[#e15b5f] text-white rounded-md">
          <span>
            <MdDelete />{" "}
          </span>{" "}
          Delete Job
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
