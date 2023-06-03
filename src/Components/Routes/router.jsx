import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../Login/Login";
import Register from "../Login/Register";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
