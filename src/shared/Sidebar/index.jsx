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
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300`}
        />
      </div>
    </div>
  );
};
