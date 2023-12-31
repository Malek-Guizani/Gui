import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { Loader } from "Shared/Loader";
const { client, proto } = require("../../../Services/grpcClient");
/* const proto = {};
proto.grpc = require("../../../services/refurb_grpc_web_pb");
const client = new proto.grpc.RefurbishingClient(
  "http://192.168.1.5:8000",
  null,
  null
); */

export const Cmd = () => {
  const [ppMessage, SetppMessage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [Status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const CmdRequest = () => {
    if (!selectedText) {
      toast.warning(" input is empty");
      return;
    }

    const request = new proto.grpc.SysExecRequest();
    request.setCommand(selectedText);
    setLoaderActive(true);
    client.sysExec(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!"); // Afficher la toast après l'expiration du délai
        return;
      }

      SetppMessage(response.getOutput());
      setStatus("Success");
    });
  };

  useEffect(() => {
    // Comparer la valeur actuelle de ppStatus avec l'ancienne valeur
    if (Status === "Success") {
      setLoaderActive(false);
      toast.success("Command applied !!!"); // Afficher la toast après l'expiration du délai
    }
    setStatus("Null");
  }, [Status]);
  return (
    <div className="mx-10 md:mx-auto w-full">
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
          <div className="flex flex-row   gap-1 mb-36 ">
            <div className="max-w-max md:max-w-xl min-w-[35rem]  bg-gray-200  rounded-md p-4 overflow-auto">
              {ppMessage}
            </div>
            <button
              className="bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => {
                // pour copier le contenu de ppMessage
                navigator.clipboard.writeText(ppMessage);
              }}
            >
              <FaCopy className="" />
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
