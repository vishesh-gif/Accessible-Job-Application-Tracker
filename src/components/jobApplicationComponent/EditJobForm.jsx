import React, { useEffect, useState } from "react";
import InputField from "../../utils/InputField";
import TextareaField from "../../utils/TextareaField";
import SelectField from "../../utils/SelectField";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import applicationService from "../../appwrite/application";
import { useDispatch } from "react-redux";
import { upDateApplication } from "../../Redux/applicationSlice";
import toast from "react-hot-toast";

const EditJobForm = ({ jobData, onUpdate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(jobData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm();

  useEffect(() => {
    if (jobData) reset(jobData);
  }, [jobData, reset]);

  const onSubmit = async (data) => {
    if (!isDirty) {
      toast.error("No changes detected");
      return;
    }
    try {
      const response = await toast.promise(
        applicationService.updateApplication(jobData.$id, data),
        {
          loading: "Updating...",
          success: "Updated!",
          error: "Could not update.",
        },
      );
      if (response) {
        dispatch(upDateApplication());
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#f7f6fc] p-4 rounded shadow border border-zinc-200">
      <h1 className="text-2xl text-center border border-gray-200 py-3 font-semibold mb-4">
        Edit Your Job
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <InputField
              label={"Company Name"}
              placeholder={"e.g. Google"}
              {...register("companyName")}
            />
            <InputField
              label={"Job Title"}
              type="text"
              placeholder={"Frontend Developer"}
              {...register("role")}
            />
            <InputField
              label={"Location"}
              type="text"
              placeholder={"Indore / Remote"}
              name={"location"}
              {...register("location")}
            />

            <InputField
              label={"Company Website"}
              type="text"
              placeholder={"Company website"}
              {...register("companyWebsite")}
            />
          </div>
          <div className="flex flex-col gap-4">
            <InputField
              label={"Applied Date"}
              type="date"
              {...register("appliedDate")}
            />
            <InputField
              label={"Company Logo URL (optional)"}
              type="text"
              {...register("companyLogoUrl")}
            />
            <InputField
              label={"Company Email"}
              type="email"
              placeholder={"Company@email.com"}
              {...register("companyEmail")}
            />
            <SelectField
              label={"Application Status"}
              options={["Applied", "Interview", "Offer", "Rejected"].filter(
                (opt) => opt != jobData?.status,
              )}
              {...register("status")}
            />
          </div>
        </div>

        <TextareaField
          label={"Notes (optional)"}
          placeholder={"ny extra details, referral info, interview notes..."}
          {...register("notes")}
        />

        <div className="flex justify-between">
          {" "}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-md font-semibold px-3 py-2 bg-[#e1e5f2] text-[#242f5b] rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#4075d7] px-2 text-white py-2 rounded font-medium"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobForm;
