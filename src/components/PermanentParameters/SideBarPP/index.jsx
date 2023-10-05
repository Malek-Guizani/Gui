import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const SidebarData = ({ toggle, service }) => {
  const isActiveLink = useIsActiveLink(service);
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
        <div className="text-[1rem] text-brown whitespace-pre">ppGet</div>
      </NavLink>
      <NavLink
        to={`/home/${service}/ppSet`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>ppSet</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/ppUpdate`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>ppUpdate</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/ppIf`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={` text-[1rem] text-brown whitespace-pre`}>ppIf</div>
      </NavLink>
    </React.Fragment>
  );
};

export default SidebarData;
const useIsActiveLink = (to) => {
  const location = useLocation();
  const serviceRegex = new RegExp(`^/home/${to}(\/|$)`);

  return (
    location.pathname.startsWith(`/home/${to}`) ||
    serviceRegex.test(location.pathname)
  );
};
