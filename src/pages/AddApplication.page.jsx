import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../utils/InputField";
import SelectField from "../utils/SelectField";
import TextareaField from "../utils/TextareaField";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../Redux/applicationSlice";
import toast from "react-hot-toast";
import DashboardBtn from "../utils/DashboardBtn";
import { useForm } from "react-hook-form";
import applicationService from "../appwrite/application";

const AddApplication = () => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state) => state.profileStatus?.userData?.user.$id,
  );

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      if (!userId) {
        toast.error("Please Login");
        return;
      }
      const application = await applicationService.createApplication(
        userId,
        data,
      );
      if (application) {
        const response = await applicationService.getApplications(userId);
        if (response) {
          dispatch(addApplication(response.documents));
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          {/* Section 1 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <InputField
                label={"Company Name"}
                placeholder={"e.g. Google"}
                {...register("companyName", {
                  required: "companyName is required",
                })}
                required
              />
              <InputField
                label={"Job Title"}
                type="text"
                placeholder={"Frontend Developer"}
                {...register("role", {
                  required: "role is required",
                })}
                required
              />
              <InputField
                label={"Location"}
                type="text"
                placeholder={"Indore / Remote"}
                name={"location"}
                {...register("location", {
                  required: "location is required",
                })}
                required
              />
              <InputField
                label={"Company Email"}
                type="email"
                placeholder={"Company@email.com"}
                {...register("companyEmail")}
                required
              />
              <InputField
                label={"Company Website"}
                type="text"
                placeholder={"Company website"}
                {...register("companyWebsite")}
                required
              />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <InputField
                label={"Applied Date"}
                type="date"
                {...register("appliedDate", {
                  required: "appliedDate is required",
                })}
                required
              />
              <InputField label="Min Salary (LPA)" {...register("minSalary")} />

              <InputField label="Max Salary (LPA)" {...register("maxSalary")} />

              <InputField
                label={"Company Logo URL (optional)"}
                type="text"
                {...register("companyLogoUrl")}
              />
              <SelectField
                label={"Application Status"}
                options={["Applied", "Interview", "Offer", "Rejected"]}
                {...register("status", {
                  required: "applicationStatus is required",
                })}
              />
            </div>
          </section>

          {/* Section 2 */}
          <TextareaField
            label={"Notes (optional)"}
            placeholder={"ny extra details, referral info, interview notes..."}
            {...register("notes")}
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
              {!isSubmitting ? "Save Application" : "Saving Application..."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplication;
