import React from "react";
import InputField from "../utils/InputField";
import { IoSettings } from "react-icons/io5";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
const Setting = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (data.currentPassword == data.confirmPassword) {
      return toast.error("Current Password and Confirm Password are same");
    }
    if (data.newPassword != data.confirmPassword) {
      return toast.error("New Password and Confirm Password are not same");
    }
    try {
      const user = await auth.getCurrentUser();
      console.log(user.passwordUpdate);
      const response = await toast.promise(
        auth.updatePassword(data.newPassword, data.currentPassword),
        {
          loading: "Updating...",
          success: "Updated!",
          error: "Could not update.",
        },
      );
      if (response) {
        toast.success("Your Password has been updated");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-8 w-full bg-white">
      {/* Top Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <span>
            <IoSettings className="text-[#2561bb]" />
          </span>{" "}
          Settings
        </h1>
        <p className="text-gray-500 pl-8">Manage your account settings</p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-row-3 gap-6">
        {/* LEFT SIDE (Password Section) */}
        <div className="lg:col-span-2 bg-white rounded shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Change Password</h2>
            <p className="text-sm text-gray-500">
              Update your password to keep your account secure
            </p>
          </div>

          <div className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label={"Current Password"}
                type="password"
                {...register("currentPassword", {
                  required: "currentPassword is required",
                })}
              />
              <InputField
                label={"New Password"}
                type="password"
                {...register("newPassword", {
                  required: "newPassword is required",
                })}
              />
              <InputField
                label={"Confirm Password"}
                type="password"
                {...register("confirmPassword", {
                  required: "confirmPassword is required",
                })}
              />

              <div className="pt-2 mt-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE (Danger Zone Card) */}
        <div className="bg-white rounded shadow-sm p-6 space-y-4 h-fit">
          <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3">
            <h3 className="font-medium text-red-600">Delete Account</h3>
            <p className="text-sm text-red-500">
              Permanently delete your account and all data. This action cannot
              be undone.
            </p>

            <button className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
