import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { options } from "../../../DB/PP_data";
const { client, proto } = require("../../../services/grpcClient");

export const Ppset = () => {

  const [ppStatus, SetppStatus] = useState(null);
  const [selectedParam, setSelectedParam] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange1 = (e) => {
    setSelectedParam(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedValue(e.target.value);
  };

  const PpSetRequest = () => {
    if (!selectedParam || !selectedValue) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.PpSetRequest();
    request.setName(selectedParam);
    request.setValue(selectedValue);

    client.ppSet(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        //setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }
      toast.success("New Value !!! ");

    });
  };
  /*
  useEffect(() => {
    if (ppStatus === "Success") {
      toast.success("New Value !!! ");
    }
    SetppStatus("Null");
  }, [ppStatus]);
  */
  return (
    <main>
      <div className="flex flex-col gap-6">
        <div className="">
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleChange1}
            value={selectedParam}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="New Value"
            onChange={handleChange2}
            value={selectedValue}
          />
        </div>
        <button
          onClick={() => {
            PpSetRequest();
          }}
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  w-52 md:w-96 rounded "
        >
          Set New Value
        </button>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </main>
  );
};
