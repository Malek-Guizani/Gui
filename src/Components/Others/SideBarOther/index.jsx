import React from "react";
import { NavLink } from "react-router-dom";

const SidebarData = ({ toggle, service }) => {
  //const [activeButton, setActiveButton] = useState("cmd");
  /*  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
 */
  const activeClasses =
    "md:w-full sidebar last:absolute left-4 bottom-4 bg-cyan-500";
  const pendingClasses = "md:w-full sidebar last:absolute left-4 bottom-4";
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
        <div className="text-[1rem] text-brown whitespace-pre">NvRam</div>
      </NavLink>

      <NavLink
        to={`/home/${service}/SboxApply`}
        className={({ isActive }) =>
          isActive ? activeClasses : pendingClasses
        }
      >
        <div className="text-[1rem] text-brown whitespace-pre">SboxApply</div>
      </NavLink>
    </React.Fragment>
  );
};

export default SidebarData;
