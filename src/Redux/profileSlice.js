import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInStatus: false,
  userData: null,
};

const profileSlice = createSlice({
  name: "profileStatus",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.logInStatus = true;
      state.userData = action.payload;
      console.log(action.payload);
    },
    logOut: (state) => {
      state.logInStatus = false;
      state.userData = null;
    },
  },
});

export const { logIn, logOut } = profileSlice.actions;

export default profileSlice.reducer;
