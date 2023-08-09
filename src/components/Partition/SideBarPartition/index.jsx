import React, { useState } from "react";
import { Link } from "react-router-dom";
const SidebarPartition = ({ toggle, service }) => {
  const [activeButton, setActiveButton] = useState("backup");
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

      <Link
        to={`/home/${service}/MakePartition`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "Make" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("Make");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          MakePartition
        </div>
      </Link>

      <Link
        to={`/home/${service}/UpdatePartition`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "UpdateP" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("UpdateP");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          UpdatePartition
        </div>
      </Link>
      <Link
        to={`/home/${service}/DeletePartition`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "DeleteP" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("DeleteP");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          DeletePartition
        </div>
      </Link>
    </React.Fragment>
  );
};

export default SidebarPartition;
