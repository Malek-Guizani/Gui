import React from "react";
import { NavLink } from "react-router-dom";
const SidebarPartition = ({ toggle, service }) => {
  const activeClasses =
    "md:w-full sidebar last:absolute left-4 bottom-4 bg-cyan-500";
  const pendingClasses = "md:w-full sidebar last:absolute left-4 bottom-4";
  return (
    <React.Fragment>
      <NavLink
        to={`/home/${service}/backupPartition`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">
          Backup partition
        </div>
      </NavLink>

      <NavLink
        to={`/home/${service}/MakePartition`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={`text-[1rem] text-brown whitespace-pre`}>
          MakePartition
        </div>
      </NavLink>

      <NavLink
        to={`/home/${service}/UpdatePartition`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={`text-[1rem] text-brown whitespace-pre`}>
          UpdatePartition
        </div>
      </NavLink>
      <NavLink
        to={`/home/${service}/DeletePartition`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className={`text-[1rem] text-brown whitespace-pre`}>
          DeletePartition
        </div>
      </NavLink>
    </React.Fragment>
  );
};

export default SidebarPartition;
