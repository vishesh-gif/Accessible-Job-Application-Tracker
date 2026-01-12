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
          data.profileImage[0]
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
      className="flex flex-col w-full mb-3 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex items-center gap-4 mb-6">
        <div className="rounded-full border-2 border-dashed border-gray-300">
          <img
            className="w-30 rounded-full"
            src={
              preview ||
              "https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-700">
            Upload Profile Photo
          </h1>
          <InputField
            className={"bg-[#3873d4] text-white px-2 py-1 rounded"}
            type={"file"}
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
      <InputField
        label="Location"
        placeholder="Enter your Location"
        {...register("location", {
          required: "Location is required",
        })}
      />
      <TextareaField
        {...register("bio")}
        label="Bio"
        placeholder="Enter Something About You"
      />
      <div className="flex justify-between mt-2">
        <button
          type="button"
          className="flex items-center bg-[#dee1f2] border gap-2 border-[#d2d5e7] rounded px-4 py-1 text-sm"
        >
          <span></span>
          Cancel
        </button>
        <button
          type="submit"
          className="flex gap-2 items-center bg-[#3873d4] text-white border border-[#d2d5e7] rounded px-4 text-sm"
        >
          <span></span>
          {isSubmitting ? "...Completing profile" : "Complete Profile"}
        </button>
        <Toaster />
      </div>
    </form>
  );
};

export default CompleteProfile;
