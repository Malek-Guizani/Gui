import React from "react";
import { Sidebar } from "shared/Sidebar";
import { Outlet, Link } from "react-router-dom";

export const Partition = () => {
  return (
    <main className="flex md:flex-row  flex-col gap-20 w-full">
      <div className="w-1/3">
        <Sidebar message="Partition" />
      </div>

      <div className="md:min-w-450 ml-0">
        <Outlet />
      </div>
    </main>
  );
};
