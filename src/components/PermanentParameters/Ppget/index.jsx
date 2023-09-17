import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { options } from "../../../DB/PP_data";
const { client, proto } = require("../../../services/grpcClient");

export const Ppget = () => {
  const [ppMessage, SetppMessage] = useState(null);
  const [ppStatus, setppStatus] = useState(null);
  const [selectedParam, setSelectedParam] = useState("");

  const handleChange = (e) => {
    setSelectedParam(e.target.value);
  };
  console.log(selectedParam);

  const PpGetRequest = () => {
    if (!selectedParam) {
      // Show a message to choose a value
      toast.warning("Please choose a value before clicking 'Get Parameter'");
      return;
    }

    console.log(selectedParam);
    const request = new proto.grpc.PpGetRequest();
    request.setParam(selectedParam);

    client.ppGet(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        /* setLoaderActive(false); */
        toast.error("Error !!!"); // Afficher la toast après l'expiration du délai
        return;
      }

      console.log(response.getMessage());
      console.log(selectedParam);
      console.log(request);
      SetppMessage(response.getMessage());
      setppStatus(response.getStatus());
    });
  };

  return (
    <React.Fragment>
      <main>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-row justify-start items-center gap-5">
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={selectedParam}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                PpGetRequest();
              }}
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Get Parameter
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
      </main>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </React.Fragment>
  );
};
