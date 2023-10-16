import React from "react";
import User from "../Pages/Users/User";
import Login from "../Pages/Login/Login";

const UserProtected = () => {
  const user = true;
  if (user) {
    return <Outlet />;
  } else {
    return <Login />;
  }
};

export default UserProtected;
