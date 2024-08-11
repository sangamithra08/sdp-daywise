import UserLeftbar from "../components/User/UserLeftbar";
import React from "react";
import { Outlet } from "react-router-dom";
import UserTopbar from "../components/User/UserTopbar";

const UserLayout = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto">
      <UserLeftbar className="fixed" />
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <UserTopbar />
        <div className="h-[92vh] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
