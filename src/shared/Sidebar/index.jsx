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
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
      {service === "service1" && (
        <SidebarData toggle={toggle} service={service} />
      )}
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
