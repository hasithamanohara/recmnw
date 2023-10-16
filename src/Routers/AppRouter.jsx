import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/Users/User";
import Login from "../Pages/Login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route element="Login" >
            <Route path="user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
