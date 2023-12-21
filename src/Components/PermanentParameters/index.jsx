import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "Shared/Sidebar";

export const PermanentParameters = () => {
  return (
    <main className="flex md:flex-row  flex-col gap-20">
      <div className="md:w-1/3">
        <Sidebar message="PermanentParameters" />
      </div>

      <div className=" mx-10 md:mx-auto w-full  md:w-2/3">
        <Outlet />
      </div>
    </main>
  );
};
