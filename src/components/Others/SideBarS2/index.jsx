import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const SidebarData = ({ toggle, service }) => {
  //const [activeButton, setActiveButton] = useState("cmd");
  /*  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
 */
  const activeClasses =
    "last:w-[17rem] sidebar last:absolute left-4 bottom-4 bg-cyan-500";
  const pendingClasses = "last:w-[17rem] sidebar last:absolute left-4 bottom-4";
  return (
    <React.Fragment>
      <NavLink
        to={`/home/${service}/cmd`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">Cmd</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/NVRAM`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">NVRAM</div>
      </NavLink>
    </React.Fragment>
  );
};

export default SidebarData;
