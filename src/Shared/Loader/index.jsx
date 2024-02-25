import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export const Loader = (props) => {
  const text = props.message;
  return (
    <div className="w-full h-full top-0 left-0 fixed block  opacity-100 z-50">
      <span
        className="opacity-100 block relative w-0 h-0 "
        style={{
          top: "calc( 50% - ( 80px / 2) )",
          left: "calc( 50% - ( 80px / 2) )",
        }}
      >
        <FontAwesomeIcon
          className="fa-spin fa-5x  text-sky-500"
          icon={faCircleNotch}
        />
        <p className="mt-2 ml-1">{text}</p>
      </span>
    </div>
  );
};
