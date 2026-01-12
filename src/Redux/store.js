import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice";
import profileReducer from "./profileSlice";
const store = configureStore({
  reducer: {
    addApplication: applicationReducer,
    profileStatus: profileReducer,
  },
});

export default store;
