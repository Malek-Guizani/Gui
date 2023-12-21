import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "Shared/Sidebar";

export const Other = () => {
  return (
    <main className="flex w-full flex-col md:flex-row gap-2  md:gap-20">
      <div className="w-full md:w-1/3">
        <Sidebar message="other" />
      </div>

      <div className=" w-full md:w-2/3">
        <Outlet />
      </div>
    </main>
  );
};
