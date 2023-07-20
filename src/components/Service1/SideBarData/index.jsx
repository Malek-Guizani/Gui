import React, { useState } from "react";
import { Link } from "react-router-dom";
const SidebarData = ({ toggle, service }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <React.Fragment>
      <Link
        to={`/home/${service}/ppGet`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "ppGet" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("ppGet");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          ppGet
        </div>
      </Link>
      <Link
        to={`/home/${service}/ppSet`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "ppSet" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("ppSet");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          ppSet
        </div>
      </Link>

      <Link
        to={`/home/${service}/ppUpdate`}
        className={`${
          toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
        } sidebar last:absolute left-4 bottom-4 ${
          activeButton === "ppUpdate" ? "bg-cyan-500" : ""
        }`}
        onClick={() => {
          handleClick("ppUpdate");
        }}
      >
        <div
          className={`${
            toggle ? "opacity-0 delay-200" : ""
          } text-[1rem] text-brown whitespace-pre`}
        >
          ppUpdate
        </div>
      </Link>
    </React.Fragment>
  );
};

export default SidebarData;
