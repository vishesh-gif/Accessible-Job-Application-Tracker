import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  application: [],
  filteredApplications: [],
};
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.application = action.payload;
      state.filteredApplications = state.application;
    },
    deleteApplication: (state, action) => {
      state.application =
        Array.isArray(state.application) ?
          state.application.filter((item) => item.$id !== action.payload)
        : [];
    },
    searchApplication: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query) {
        state.filteredApplications = state.application;
        return;
      }
      state.filteredApplications = state.application.filter((item) =>
        item.companyName.toLowerCase().includes(query),
      );
    },
  },
});

export const { addApplication, deleteApplication, searchApplication } =
  applicationSlice.actions;

export default applicationSlice.reducer;
