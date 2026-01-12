import React, { useEffect } from "react";
import SideBar from "./components/sideBarComponents/SideBar.Comp";
import Home from "./components/Home.Com";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./Redux/profileSlice";
import auth from "./appwrite/auth";
import profileService from "./appwrite/profile";
import storageService from "./appwrite/storage";

const App = () => {
  const dispatch = useDispatch();
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
        })
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
      <div className="w-full flex flex-row h-full">
        <section className="w-[20%] min-h-screen bg-[#2561bb] text-white">
          <SideBar />
        </section>
        <section className="w-[80%]">
          <Home />
        </section>
      </div>
    </>
  );
};

export default App;
