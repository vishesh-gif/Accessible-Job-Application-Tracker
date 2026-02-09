import React from "react";

import { useSelector } from "react-redux";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileDashBoard from "../components/profileComponents/ProfileDashBoard";
import ProfileFormLayOut from "../components/profileComponents/ProfileFormLayOut";

const Profile = () => {
  const status = useSelector((state) => state.profileStatus.logInStatus);

  return (
    <>
      {status ?
        // <AuthLayout />
        <ProfileDashBoard />
      : <ProfileFormLayOut />}
    </>
  );
};

export default Profile;
