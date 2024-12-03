import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import Home from "./Layout/Home/Home.jsx";
import Login from "./Layout/Login/Login.jsx";
import Signup from "./Layout/Signup/Signup.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ErrorPage from "./Layout/ErrorPage/ErrorPage.jsx";
import UpdateProfile from "./Layout/UpdateProfile/UpdateProfile.jsx";
import PrivateRoute from "./Private/PrivateRoute.jsx";
import Details from "./Layout/Details/Details.jsx";
import { HelmetProvider } from "react-helmet-async";
import AboutUs from "./Layout/AboutUs/AboutUs.jsx";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/estate.json"),
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "aboutus",
        loader: () => fetch("/leaders.json"),
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        loader: () => fetch("/estate.json"),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
