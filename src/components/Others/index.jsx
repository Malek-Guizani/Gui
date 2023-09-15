import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Sidebar } from "shared/Sidebar";

export const Other = () => {
  return (
    <main className="flex flex-row gap-2  md:gap-20">
      <div className="w-1/3">
        <Sidebar message="other" />
      </div>

      <div className="md:min-w-450 ">
        <Outlet />
      </div>
    </main>
  );
};
