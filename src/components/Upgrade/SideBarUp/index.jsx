import React, { useState } from "react";
import { Link } from "react-router-dom";
const SideBarUp = ({ toggle, service }) => {
  const [activeButton, setActiveButton] = useState("SoftwareUpgrade");
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <React.Fragment>
      <Link
        to={`/home/${service}/SoftwareUpgrade`}
        className={`last:w-[17rem] sidebar last:absolute left-4 bottom-4 ${
          activeButton === "SoftwareUpgrade" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("SoftwareUpgrade");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          SoftwareUpgrade
        </div>
      </Link>
      <Link
        to={`/home/${service}/firmwareUpgrade`}
        className={`${"last:w-[17rem]"} sidebar last:absolute left-4 bottom-4 ${
          activeButton === "firmwareUpgrade" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("firmwareUpgrade");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          firmwareUpgrade
        </div>
      </Link>
    </React.Fragment>
  );
};

export default SideBarUp;
