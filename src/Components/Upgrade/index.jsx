import { Outlet } from "react-router-dom";
import { Sidebar } from "Shared/Sidebar";

export const Upgrade = () => {
  return (
    <main className="flex md:flex-row flex-col gap-20">
      <div className="md:w-1/3 ">
        <Sidebar message="Upgrade" />
      </div>
      <div className=" md:min-w-450">
        <Outlet />
      </div>
    </main>
  );
};
