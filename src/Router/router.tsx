import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Auth/Register";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Homescreen from "../Pages/Home/Homescreen";
import Otp from "../Pages/Auth/Otp";
import PrivateRoute from "./PrivateRouter";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "otp",
        element: <Otp />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Homescreen />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
