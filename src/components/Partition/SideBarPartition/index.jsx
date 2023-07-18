import React, { useState } from "react";
import { Link } from "react-router-dom";
const SidebarPartition = ({ toggle, service }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <React.Fragment>
      <Link
        to={`/home/${service}/backupPartition`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "backup" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("backup");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          backup partition
        </div>
      </Link>
    </React.Fragment>
  );
};

export default SidebarPartition;