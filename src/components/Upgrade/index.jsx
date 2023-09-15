import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "shared/Sidebar";

export const Upgrade = () => {
  return (
    <main className="flex flex-row gap-2 md:gap-20">
      <div className="w-1/3">
        <Sidebar message="Upgrade" />
      </div>
      <div className=" md:min-w-450">
        <Outlet />
      </div>
    </main>
  );
};
