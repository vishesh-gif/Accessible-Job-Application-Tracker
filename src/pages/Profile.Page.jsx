import React from "react";
import InputField from "../utils/InputField";
import TextareaField from "../utils/TextareaField";
import { BsFillPersonFill } from "react-icons/bs";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
const Profile = () => {
  return (
    <div className="mb-4">
      <div>
        <h1 className="font-semibold text-lg flex items-center gap-2 bg-gray-100 border border-gray-200 py-2 px-1 text-[#37425e]">
          <span className="text-2xl">
            <BsFillPersonFill className="" />
          </span>{" "}
          Create Profile
        </h1>
        <p className="text-sm py-4 bg-white px-1 text-gray-500">
          Fill out the information below to create your profile.
        </p>
      </div>
      <section className="py-4 px-4 border border-gray-100 rounded shadow-2xl bg-white">
        <section className="flex items-center gap-4 mb-6">
          <div className="rounded-full border-2 border-dashed border-gray-300">
            <img
              className="w-30 rounded-full"
              src="https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Upload Profile Photo
            </h1>
            <button className="px-4 py-1.5 rounded bg-[#3873d4] text-white">
              Upload Profile Photo
            </button>
            <p className="text-xs text-gray-400">JPG or PNG, Max 5MB.</p>
          </div>
        </section>

        {/*  */}

        <section className="flex flex-col w-full mb-3">
          <div className="flex gap-4 w-full items-center">
            <InputField
              divClass="flex-1"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <InputField
              divClass="flex-1"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex gap-5 flex-col">
            <InputField
              label={"Location"}
              placeholder={"Enter Your Location"}
            />
            <TextareaField
              label={"Bio"}
              placeholder={
                "Tell us a little about yourself and your career goals."
              }
            />
          </div>
        </section>
        <div className="flex justify-between">
          <button className="flex items-center bg-[#dee1f2] border gap-2 border-[#d2d5e7] rounded px-4 py-1 text-sm">
            <span>
              <MdChevronLeft />
            </span>
            Cancel
          </button>
          <button className="flex gap-2 items-center bg-[#3873d4] text-white border border-[#d2d5e7] rounded px-4 text-sm">
            Create Profile
            <span>
              <MdChevronRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
