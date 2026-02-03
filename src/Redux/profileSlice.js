import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInStatus: false,
  userData: null,
  sideBarWidth: false,
};

const profileSlice = createSlice({
  name: "profileStatus",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.logInStatus = true;
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.logInStatus = false;
      state.userData = null;
    },
    SideBarLayout: (state) => {
      state.sideBarWidth = !state.sideBarWidth;
    },
  },
});

export const { logIn, logOut, SideBarLayout } = profileSlice.actions;

export default profileSlice.reducer;
