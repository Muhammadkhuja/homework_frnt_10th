import App from "../App";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Students from "../logs/Students";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Index from "../logs";
import User from "../pages/User";
import Home from "../components/Home";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="logs" element={<Home />}>
          <Route path="user" element={<User />} />
          {/* <Route path="/drivers" element={<Driver/>} /> */}
          <Route path="students" element={<Students />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
