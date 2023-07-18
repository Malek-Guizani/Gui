import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Loader } from "shared/Loader";
import { Sidebar } from "shared/Sidebar";

export const Service1 = () => {
  return (
    <main className="flex md:flex-row  flex-col gap-20">
      <div className="">
        <Sidebar message="service1" />
      </div>

      <div className="md:min-w-450 ml-0">
        <Outlet />
      </div>
    </main>
  );
};
