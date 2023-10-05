import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Loader } from "shared/Loader";
import { Sidebar } from "shared/Sidebar";

export const Service1 = () => {
  return (
    <main className="flex md:flex-row  flex-col gap-20">
      <div className="md:w-1/3">
        <Sidebar message="service1" />
      </div>

      <div className=" mx-10 md:mx-auto w-full  md:w-2/3">
        <Outlet />
      </div>
    </main>
  );
};
