import React from "react";
import { MdBarcodeReader } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const ActionsSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-[#f7f6fc] p-2 flex flex-col rounded shadow-2xl border-zinc-200 border">
        <h1 className="text-[22px] mb-2">Actions</h1>
        <div className="flex flex-col gap-5 ">
          <button className="bg-[#f5d396] px-4 text-lg  py-1.5 font-medium border border-[#f1c26a] rounded-sm text-[#1c2438 flex items-center gap-2">
            <span>
              <IoIosCalendar />
            </span>
            Schedule Follow-Up
          </button>
          <button className="text-white rounded-sm bg-[#e15b5f] px-4 text-lg  py-1.5 font-medium border border-[#e02f35] flex items-center gap-2">
            <span>
              <MdBarcodeReader />
            </span>{" "}
            Mark as Rejected
          </button>
        </div>
      </div>
      <div className="bg-[#f7f6fc] border-zinc-200 border p-2 flex flex-col rounded shadow-2xl">
        <h1
          className="text-[20px] mb-2 font-medium
              "
        >
          Contect Information
        </h1>
        <ul className="flex flex-col gap-3 text-sm">
          <li className="flex items-center gap-1 font-semibold">
            <span>
              <FaLinkedin className="text-lg text-[#4075d7]" />
            </span>{" "}
            <p>https://linkedin.com/in/johnDoe</p>
          </li>
          <hr className="border-0 border-t my-2 border-[#e0e1e2]" />
          <li className="flex items-center gap-1 font-semibold text-[#363842]">
            <span>
              <FaEnvelope />
            </span>{" "}
            johndoe@gmail.com
          </li>
          <hr className="border-0 border-t my-2 border-[#e0e1e2]" />
          <li className="flex items-center gap-1 font-semibold text-[#575e79]">
            <span>
              <FaPhoneAlt />
            </span>
            +1000851808{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ActionsSection;
