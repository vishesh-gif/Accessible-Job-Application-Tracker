import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  application: [],
  filteredApplications: [],
  reFetch: false,
};
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.application = action.payload;
      state.filteredApplications = state.application;
    },
    removeAll: (state, action) => {
      state.application = [];
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
    filtereApplicationByStatus: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query) {
        state.filteredApplications = state.application;
      }
      state.filteredApplications = state.application.filter((item) =>
        item.status.toLowerCase().includes(query),
      );
    },
    moveToRejected: (state) => {
      state.reFetch = !state.reFetch;
    },
    upDateApplication: (state) => {
      state.reFetch = !state.reFetch;
    },
  },
});

export const {
  addApplication,
  deleteApplication,
  searchApplication,
  removeAll,
  moveToRejected,
  upDateApplication,
  filtereApplicationByStatus,
} = applicationSlice.actions;

export default applicationSlice.reducer;
