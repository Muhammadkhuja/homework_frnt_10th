import React from "react";
import User from "./pages/User";
import Products from "./pages/Products";
import Post from "./pages/Post";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import SingleUser from "./pages/SingleUser";
function App() {
  return <Outlet />;
}

export default App;
