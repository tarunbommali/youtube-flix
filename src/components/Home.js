import React from "react";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-[#0f0f0f] text-white h-screen">
      <div
        className="bg-[#0f0f0f] text-red-50 overflow-y-scroll"
        style={{ flex: "0 0 auto" }}
      >
        <SideMenu />
      </div>
      <div className="w-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
