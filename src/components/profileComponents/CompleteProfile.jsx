import React, { useState } from "react";
import TextareaField from "../../utils/TextareaField";
import InputField from "../../utils/InputField";
import { useForm } from "react-hook-form";
import auth from "../../appwrite/auth";
import storageService from "../../appwrite/storage";
import profileService from "../../appwrite/profile";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/profileSlice";
import toast, { Toaster } from "react-hot-toast";

const CompleteProfile = () => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await auth.getCurrentUser();
      if (!user) return;
      let avatarId = null;
      if (data.profileImage[0]) {
        const uploaded = await storageService.uploadProfileImage(
          data.profileImage[0],
        );
        avatarId = uploaded.$id;
      }
      await profileService.createProfile(user.$id, {
        userId: user.$id, // 🔥 REQUIRED
        location: data.location,
        bio: data.bio,
        avatarId: avatarId,
        completed: true,
      });
      navigate("/profile");
      dispatch(logIn());
    } catch (error) {
      console.error(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-6 mb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Profile Image Section */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
        <div className="rounded-full border-2 border-dashed border-gray-300 p-1">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 rounded-full object-cover"
            src={
              preview ||
              "https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg"
            }
            alt="Profile Preview"
          />
        </div>

        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-base sm:text-lg font-semibold text-gray-700">
            Upload Profile Photo
          </h1>

          <InputField
            className="bg-[#3873d4] text-white px-3 py-1 rounded text-sm"
            type="file"
            accept="image/*"
            {...register("profileImage", {
              onChange: (e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              },
            })}
          />

          <p className="text-xs text-gray-400">JPG or PNG, Max 5MB.</p>
        </div>
      </section>

      {/* Location */}
      <InputField
        label="Location"
        placeholder="Enter your location"
        {...register("location", {
          required: "Location is required",
        })}
      />

      {/* Bio */}
      <TextareaField
        {...register("bio")}
        label="Bio"
        placeholder="Enter something about you"
      />

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
        <button
          type="button"
          className="w-full sm:w-auto flex justify-center items-center bg-[#dee1f2] border border-[#d2d5e7] rounded px-4 py-2 text-sm"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto flex justify-center items-center bg-[#3873d4] text-white border border-[#d2d5e7] rounded px-4 py-2 text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "...Completing profile" : "Complete Profile"}
        </button>
      </div>

      <Toaster />
    </form>
  );
};

export default CompleteProfile;
