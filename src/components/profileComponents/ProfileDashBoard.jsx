import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../appwrite/auth";
import { logIn, logOut } from "../../Redux/profileSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ProfileDashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const userInfo = useSelector((state) => state.profileStatus?.userData);
  console.log(userInfo);

  const signOut = async () => {
    try {
      await auth.logout();
      dispatch(logOut());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  if (loading && !userInfo) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const { user, userImg, userData } = userInfo || {};

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6">
      <Toaster position="top-right" />

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-sm border p-6 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="relative">
            <img
              src={userImg || "https://ui-avatars.com/api/?name=" + user?.name}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-100 shadow-sm"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">
              {user?.name || "User Name"}
            </h1>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button
            onClick={signOut}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Location
            </h2>
            <p className="text-gray-800 font-medium">
              {userData?.location || "Not specified"}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Account Status
            </h2>
            <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
              Active
            </span>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Bio
          </h2>
          <p className="text-gray-700 leading-relaxed italic">
            {userData?.bio || "No bio added yet."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileDashBoard;
