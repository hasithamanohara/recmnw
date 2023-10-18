import React from "react";
import User from "../Pages/Users/User";
import { Navigate } from "react-router-dom";

const UserProtected = () => {
  const user = true;
  return user ? <User /> : <Navigate to="/Login" />;
};

export default UserProtected;
