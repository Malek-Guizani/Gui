import React, { useState } from "react";
import { options, options2 } from "../../../DB/PP_data";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../Services/grpcClient");

export const PpSwap = () => {
  const [selectedParam1, setSelectedParam1] = useState("");
  const [selectedParam2, setSelectedParam2] = useState("");

  const PpSwapRequest = () => {
    if (!selectedParam1 || !selectedParam2) {
      toast.warning("Incomplete fields. Please fill in both fields !!!");
      return;
    }

    const request = new proto.grpc.PpSwapRequest();
    request.setA(selectedParam1);
    request.setB(selectedParam2);
    client.ppSwap(request, {}, (err, response) => {
      if (err) {
        console.error("malek", err);
        toast.error("Error !!!");
        return;
      }
      toast.success("Success !!!");
    });
  };
  return (
    <div className=" flex flex-col items-start">
      <div>SWAP : </div>
      <div className=" ">
        <div className="flex flex-row mt-6 mb-5 items-center gap-10">
          <p className="md:m-5 text-center"> Value 1 </p>
          <select
            id="param-select"
            className="p-2 border border-gray-300 rounded-md  md:h-10 md:w-60"
            onChange={(e) => {
              setSelectedParam1(e.target.value);
            }}
            value={selectedParam1}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row flex-wrap items-center  gap-10">
          <p className="md:m-5 text-center"> Value 2 </p>

          <div className="flex flex-row gap-5">
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md md:h-10 md:w-60"
              onChange={(e) => setSelectedParam2(e.target.value)}
              value={selectedParam2}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex  mt-5 justify-center">
          <button
            onClick={() => {
              PpSwapRequest();
            }}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max "
          >
            Swap
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </div>
  );
};
