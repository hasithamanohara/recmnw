import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Outlet />
      
      <Footer />
    </div>
  );
};

export default Mainlayout;
