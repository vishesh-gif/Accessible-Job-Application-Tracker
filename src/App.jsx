import React, { useEffect } from "react";
import SideBar from "./components/sideBarComponents/SideBar.Comp";
import Home from "./components/Home.Com";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./Redux/profileSlice";
import auth from "./appwrite/auth";
import profileService from "./appwrite/profile";
import storageService from "./appwrite/storage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.profileStatus.sideBarWidth);

  const status = useSelector((state) => state.profileStatus.logInStatus);
  const userData = async () => {
    try {
      const user = await auth.getCurrentUser();
      if (!user) return;
      const profile = await profileService.getProfile(user.$id);
      if (!profile) return;
      const avatarURL = await storageService.getProfileImage(profile.avatarId);
      dispatch(
        logIn({
          user,
          userData: profile,
          userImg: avatarURL,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userData();
  }, [status]);

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen w-full sm:relative">
        {/* Sidebar */}
        <aside
          className={`
    fixed top-0 left-0 z-50 min-h-screen
    w-[75%] max-w-[280px]
    bg-[#2561bb] text-white

    transform transition-transform duration-300 ease-in-out
    ${sideBar ? "translate-x-0" : "-translate-x-full"}

    md:static md:translate-x-0 md:w-[20%]
  `}
        >
          <SideBar />
        </aside>
        {/* Main Content */}
        <main className="w-full lg:w-[80%]">
          <Home />
        </main>
      </div>
    </>
  );
};

export default App;
