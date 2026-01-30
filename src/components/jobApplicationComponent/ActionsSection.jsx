import React, { useState } from "react";
import { MdBarcodeReader } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import applicationService from "../../appwrite/application";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { moveToRejected } from "../../Redux/applicationSlice";
import SelectField from "../../utils/SelectField";

const ActionsSection = ({ className, documentId, applicationData }) => {
  const [appStatus, setAppStatus] = useState("");
  const user = useSelector((state) => state.profileStatus?.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = async (updateStatus) => {
    if (!updateStatus) {
      toast.error("Please enter Status");
      return;
    }
    try {
      const response = await applicationService.updateApplication(documentId, {
        status: updateStatus,
      });
      if (response) {
        toast.success("Application Updated");
        dispatch(moveToRejected());
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className={`${className}"flex flex-col gap-4`}>
      <div className="bg-[#f7f6fc] p-2 flex flex-col rounded shadow-2xl border-zinc-200 border">
        <h1 className="text-[22px] mb-2">Actions</h1>
        <div className="flex flex-col gap-5 ">
          <div>
            <SelectField
              label={"Update Status"}
              onChange={(e) => setAppStatus(e.target.value)}
              options={["Applied", "Interview", "Offer"].filter(
                (opt) => opt != applicationData?.status,
              )}
            />
          </div>

          <button
            onClick={() => handleUpdate(appStatus)}
            className="bg-[#f5d396] px-4 text-lg  py-1.5 font-medium border border-[#f1c26a] rounded-sm text-[#1c2438] flex items-center gap-2"
          >
            <span>
              <IoIosCalendar />
            </span>
            Schedule Follow-Up
          </button>
          <button
            onClick={() => handleUpdate("Rejected")}
            className="text-white rounded-sm bg-[#e15b5f] px-4 text-lg  py-1.5 font-medium border border-[#e02f35] flex items-center gap-2"
          >
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
          Contact Information
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
            {user?.user?.email}
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
