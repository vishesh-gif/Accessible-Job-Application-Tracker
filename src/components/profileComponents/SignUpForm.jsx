import React, { useState } from "react";
import InputField from "../../utils/InputField";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import auth from "../../appwrite/auth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const account = await auth.createAccount(data);
      if (account) navigate("/complete-profile");
    } catch (error) {
      console.error(error?.message || "Signup failed");
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full mb-3 "
    >
      <InputField
        divClass="flex-1"
        label="Full Name"
        placeholder="Enter your full name"
        {...register("name", {
          required: "Full name is required",
        })}
      />
      <InputField
        divClass="flex-1"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
        })}
      />

      <InputField
        type="password"
        label="Create Password"
        placeholder="Create Password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
        })}
      />

      <div className="flex justify-between mt-2">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="flex items-center bg-[#dee1f2] border gap-2 border-[#d2d5e7] rounded px-4 py-1 text-sm"
        >
          <span>
            <MdChevronLeft />
          </span>
          Cancel
        </button>
        <button
          type="submit"
          className="flex gap-2 items-center bg-[#3873d4] text-white border border-[#d2d5e7] rounded px-4 text-sm cursor-pointer"
        >
          {isSubmitting ? "Creating..." : "Create Profile"}
          <span>
            <MdChevronRight />
          </span>
        </button>
        <Toaster />
      </div>
    </form>
  );
};

export default SignUpForm;
