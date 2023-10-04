import React from "react";
import SidebarData from "components/PermanentParameters/SideBarPP";
import SidebarS2 from "components/Others/SideBarOther";
import SideBarUp from "components/Upgrade/SideBarFU";
import SidebarPartition from "components/Partition/SideBarPartition";
export const Sidebar = (props) => {
  const service = props.message;
  return (
    <div
      className={`2xl:absolute 2xl:top-[9rem]  2xl:left-[17rem]    md:absolute  md:top-[9rem]  md:left-[0] sm:top-0 sm:left-[13rem]
      left-[10rem] h-[65%]  md:w-[15rem]
      md:ml-6 p-4  flex md:flex-col flex-row justify-center md:justify-normal items-center md:items-start bg-zinc-300 w-full
      rounded-3xl border  border-solid border-glass  transform-none`}
    >
      {service === "service1" && <SidebarData service={service} />}
      {service === "other" && <SidebarS2 service={service} />}
      {service === "Upgrade" && <SideBarUp service={service} />}
      {service === "Partition" && <SidebarPartition service={service} />}
      <div className=" hidden  ">{/* don't delete this div*/}</div>
    </div>
  );
};
