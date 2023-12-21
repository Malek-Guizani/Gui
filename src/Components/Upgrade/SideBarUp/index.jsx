import React from "react";
import { NavLink } from "react-router-dom";
const SideBarUp = ({ toggle, service }) => {
  const activeClasses =
    "md:w-full sidebar last:absolute left-4 bottom-4 bg-cyan-500";
  const pendingClasses = "md:w-full sidebar last:absolute left-4 bottom-4";
  return (
    <React.Fragment>
      <NavLink
        to={`/home/${service}/firmwareUpgrade`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">
          FirmwareUpgrade
        </div>
      </NavLink>
    </React.Fragment>
  );
};

export default SideBarUp;
