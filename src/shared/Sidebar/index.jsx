import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from "components/Service1/SideBarData";
import SidebarS2 from "components/Service2/SideBarS2";
import SideBarUp from "components/Upgrade/SideBarUp";
import SidebarPartition from "components/Partition/SideBarPartition";
export const Sidebar = (props) => {
  const [toggle, setToggle] = useState(false);
  const service = props.message;
  return (
    <div
      className={`bg-zinc-300  h-[65%] w-[15rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass md:absolute md:top-[9rem] sm:top-0 left-[17rem] transform-none`}
    >
      {service === "service1" && <SidebarData service={service} />}
      {service === "service2" && (
        <SidebarS2 toggle={toggle} service={service} />
      )}
      {service === "Upgrade" && <SideBarUp toggle={toggle} service={service} />}
      {service === "Partition" && (
        <SidebarPartition toggle={toggle} service={service} />
      )}
      <div>{/* don't delete this div*/}</div>
    </div>
  );
};
