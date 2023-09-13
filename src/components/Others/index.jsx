import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Sidebar } from "shared/Sidebar";

export const Other = () => {
  return (
    <main className="flex flex-row gap-2  justify-between">
      <Sidebar message="other" />
      <div className="md:min-w-450 ml-24">
        <Outlet />
      </div>
    </main>
  );
};
