import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

import { Link } from "react-router-dom";
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

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const CmdRequest = () => {
    const request = new proto.grpc.CmdRequest();
    request.setCmd(selectedText);

    client.cmd(request, {}, (err, response) => {
      console.log(request);
      if (err) {
        console.error(err);
        return;
      }

      console.log(response.getMessage());

      SetppMessage(response.getMessage());
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row justify-start items-center gap-5">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Nouvelle Valeur"
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => {
              CmdRequest();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Executer La Commande
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
    </div>
  );
};
