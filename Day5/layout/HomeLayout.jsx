import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0">
        <div className="w-full h-[9vh]">
          <Navbar />
        </div>
        <Outlet />
        <div className="w-full h-[20vh]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
