import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextareaField from "../components/TextareaField";
import { useDispatch } from "react-redux";
import { addApplication } from "../Redux/applicationSlice";
import toast, { Toaster } from "react-hot-toast";
import DashboardBtn from "../components/DashboardBtn";

const AddApplication = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    company: "",
    role: "",
    location: "",
    appliedDate: "",
    imageUrl: "",
    status: "Applied",
    notes: "",
    statusText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const statusMap = {
      Applied: "Applied",
      Interview: "Interviewing",
      Offer: "Offer Received",
      Rejected: "Rejected",
    };

    const addData = {
      ...formData,
      id: crypto.randomUUID(),
      statusText: statusMap[formData.status] || "Applied",
    };

    dispatch(addApplication(addData));
    toast("Application created");
    setFormData({
      company: "",
      role: "",
      location: "",
      appliedDate: "",
      imageUrl: "",
      status: "Applied",
      notes: "",
      statusText: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col ">
      {/* Header */}

      <DashboardBtn />

      {/* Main Card */}
      <div className="bg-white shadow-sm  p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Add Job Application
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Section 1 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <InputField
                label={"Company Name"}
                type="text"
                placeholder={"e.g. Google"}
                name={"company"}
                onChange={handleChange}
                value={formData.company}
                required
              />
              <InputField
                label={"Job Title"}
                type="text"
                placeholder={"Frontend Developer"}
                name={"role"}
                onChange={handleChange}
                value={formData.role}
                required
              />
              <InputField
                label={"Location"}
                type="text"
                placeholder={"Indore / Remote"}
                name={"location"}
                onChange={handleChange}
                value={formData.location}
                required
              />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <InputField
                label={"Applied Date"}
                type="date"
                name={"appliedDate"}
                onChange={handleChange}
                value={formData.appliedDate}
                required
              />

              <InputField
                label={"Company Logo URL (optional)"}
                type="text"
                placeholder={"https://..."}
                onChange={handleChange}
                value={formData.imageUrl}
              />
              <SelectField
                label={"Application Status"}
                options={["Applied", "Interview", "Offer", "Rejected"]}
                name={"status"}
                onChange={handleChange}
                value={formData.status}
                required
              />
            </div>
          </section>

          {/* Section 2 */}
          <TextareaField
            label={"Notes (optional)"}
            placeholder={"ny extra details, referral info, interview notes..."}
            name={"notes"}
            onChange={handleChange}
            value={formData.notes}
          />

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <NavLink
              to="/"
              className="px-5 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </NavLink>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-[#1153c1] text-white font-medium hover:bg-[#0d44a0]"
            >
              Save Application
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplication;
