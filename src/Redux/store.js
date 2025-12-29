import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice";
const store = configureStore({
  reducer: {
    addApplication: applicationReducer,
  },
});

export default store;
