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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-application",
        element: <AddApplication />,
      },
      {
        path: "job-detail/:id",
        element: <JobDetail />,
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
  </Provider>
);
