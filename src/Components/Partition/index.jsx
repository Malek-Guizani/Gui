import React from "react";
import { Sidebar } from "Shared/Sidebar";
import { Outlet } from "react-router-dom";

export const Partition = () => {
  return (
    <main className="flex flex-col md:flex-row   gap-20 w-full">
      <div className=" md:w-1/3">
        <Sidebar message="Partition" />
      </div>

      <div className="md:min-w-450 ml-0">
        <Outlet />
      </div>
    </main>
  );
};
