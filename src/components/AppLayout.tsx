import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="pt-[4rem] px-[4.8rem] pb-[6.4rem]">
          <div className="max-w-[75rem] my-0 mx-auto flex flex-col gap-[3.2rem]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
