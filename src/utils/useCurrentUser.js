// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import auth from "../appwrite/auth";
// import profileService from "../appwrite/profile";
// import { logIn } from "../Redux/profileSlice";
// import storageService from "../appwrite/storage";

// const useCurrentUser = ({ currentUser }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUser = async () => {
//       console.log(currentUser);
//       if (!currentUser) return;

//       const userData = await profileService?.getProfile(currentUser?.$id);

//       const userImgUrl = await storageService?.getProfileImage(
//         userData?.avatarId
//       );

//       if (userData) {
//         dispatch(logIn({ user: currentUser, userData, userImg: userImgUrl }));
//       }
//     };

//     fetchUser();
//   }, [currentUser]);
// };

// export default useCurrentUser;
