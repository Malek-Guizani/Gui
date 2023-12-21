import React from "react";
import { NavLink } from "react-router-dom";
const SidebarData = ({ service }) => {
  const activeClasses =
    "md:w-full sidebar last:absolute left-4 bottom-4 bg-cyan-500";
  const pendingClasses = "md:w-full sidebar last:absolute left-4 bottom-4";
  return (
    <React.Fragment>
      <NavLink
        to={`/home/${service}/ppGet`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">PpGet</div>
      </NavLink>
      <NavLink
        to={`/home/${service}/ppSet`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>PpSet</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/ppUpdate`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>PpUpdate</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/ppIf`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>PpIf</div>
      </NavLink>
      <NavLink
        to={`/home/${service}/PpSwap`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>PpSwap</div>
      </NavLink>
    </React.Fragment>
  );
};

export default SidebarData;
