import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  application: [],
};
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.application.push(action.payload);
    },
  },
});

export const { addApplication } = applicationSlice.actions;

export default applicationSlice.reducer;
