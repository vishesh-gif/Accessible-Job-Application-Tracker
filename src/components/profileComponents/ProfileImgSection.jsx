import React from "react";

const ProfileImgSection = () => {
  return (
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
  );
};

export default ProfileImgSection;
