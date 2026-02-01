import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.page.jsx";
import Profile from "./pages/Profile.Page.jsx";
import AddApplication from "./pages/AddApplication.page.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import JobDetail from "./components/jobApplicationComponent/JobDetail.jsx";
import ProfileDashBoard from "./components/profileComponents/ProfileDashBoard.jsx";
import ProfileFormLayOut from "./components/profileComponents/ProfileFormLayOut.jsx";
import CompleteProfile from "./components/profileComponents/CompleteProfile.jsx";
import EditJobForm from "./components/jobApplicationComponent/EditJobForm.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 🌍 Public / open pages
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "job-detail/:id",
        element: <JobDetail />,
      },

      // 👤 Profile pages (optional)
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile-form",
        element: <ProfileFormLayOut />,
      },
      {
        path: "complete-profile",
        element: <CompleteProfile />,
      },

      // 🧾 Complete profile (redirect target)
      {
        path: "profile-dashboard",
        element: <ProfileDashBoard />,
      },
      // 🔒 Protected ONLY when creating application
      {
        path: "add-application",
        element: <AddApplication />,
      },
      {
        path: "editJobForm",
        element: <EditJobPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>,
);
