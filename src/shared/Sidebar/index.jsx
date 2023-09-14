import React from "react";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import SidebarData from "components/PermanentParameters/SideBarPP";
import SidebarS2 from "components/Others/SideBarOther";
import SideBarUp from "components/Upgrade/SideBarFU";
import SidebarPartition from "components/Partition/SideBarPartition";
export const Sidebar = (props) => {
  const [toggle, setToggle] = useState(false);
  const service = props.message;
  return (
    <div
      className={`2xl:absolute 2xl:top-[9rem]  2xl:left-[17rem]    md:absolute  md:top-[9rem]  md:left-[0]                         sm:top-0 sm:left-[13rem] left-[10rem] h-[65%] md:w-[15rem] ml-6 p-4  flex md:flex-col flex-row  bg-zinc-300 w-full  rounded-3xl border  border-solid border-glass  transform-none`}
    >
      {service === "service1" && <SidebarData service={service} />}
      {service === "other" && <SidebarS2 toggle={toggle} service={service} />}
      {service === "Upgrade" && <SideBarUp toggle={toggle} service={service} />}
      {service === "Partition" && (
        <SidebarPartition toggle={toggle} service={service} />
      )}
      <div>{/* don't delete this div*/}</div>
    </div>
  );
};
