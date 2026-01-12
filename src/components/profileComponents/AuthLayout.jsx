import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../../appwrite/auth";
import { logIn } from "../../Redux/profileSlice";
import profileService from "../../appwrite/profile";
import storageService from "../../appwrite/storage";

export default function AuthLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.profileStatus.logInStatus);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await auth.getCurrentUser();
        console.log(user);
        if (user) {
          const userData = await profileService?.getProfile(user?.$id);
          let userImgUrl = null;
          if (userData?.avatarId) {
            userImgUrl = await storageService?.getProfileImage(
              userData.avatarId
            );
          }
          dispatch(
            logIn({
              user: user,
              userData: userData || {},
              userImg: userImgUrl,
            })
          );
        } else {
          // navigate("/profile");
          return;
        }
      } finally {
        setLoader(false);
      }
    };
    checkAuth();
  }, [loginStatus, navigate]);

  return loader ? <div>Loading...</div> : <>{children}</>;
}
