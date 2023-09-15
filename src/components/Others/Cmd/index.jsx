import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import { Loader } from "shared/Loader";
const proto = {};
proto.grpc = require("../../../services/refurb_grpc_web_pb");
const client = new proto.grpc.refurbClient(
  "http://192.168.1.5:8000",
  null,
  null
);

export const Cmd = () => {
  const [ppMessage, SetppMessage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [Status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const CmdRequest = () => {
    const request = new proto.grpc.CmdRequest();
    request.setCmd(selectedText);
    setLoaderActive(true);
    client.cmd(request, {}, (err, response) => {
      console.log(request);
      if (err) {
        console.error(err);
        return;
      }

      console.log(response.getMessage());

      SetppMessage(response.getMessage());
      setStatus(response.getStatus());
    });
  };

  useEffect(() => {
    // Comparer la valeur actuelle de ppStatus avec l'ancienne valeur
    if (Status == "Success") {
      setLoaderActive(false);
      toast.success("Command applied !!!"); // Afficher la toast après l'expiration du délai
    }
    setStatus("Null");
  }, [Status]);
  return (
    <div>
      {isLoaderActive && (
        <div>
          <Loader />
        </div>
      )}

      <div
        className={
          isLoaderActive
            ? "opacity-70 backdrop-blur-sm flex flex-col gap-10"
            : "opacity-100 flex flex-col gap-10"
        }
        style={isLoaderActive ? { filter: "blur(4px)" } : {}}
      >
        <div className="flex flex-row justify-start items-center gap-5">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="New Value"
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => {
              CmdRequest();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Execute the command
          </button>
        </div>
        <div className="bg-white ">
          <h1 className="text-xl mb-2">Result :</h1>
          <div className="flex flex-row   gap-1">
            <div className="bg-gray-200 w-[10rem] md:w-[22rem] rounded-md p-4 overflow-auto">
              {ppMessage}
            </div>
            <button
              className="bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => {
                // Logique pour copier le contenu de ppMessage
                navigator.clipboard.writeText(ppMessage);
              }}
            >
              <FaCopy className="mr-2" />
              <span className="tooltip bg-gray-800 text-white text-xs px-2 py-1 rounded absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-opacity duration-300">
                Copier
              </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </div>
  );
};
