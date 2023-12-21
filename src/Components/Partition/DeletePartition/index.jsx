import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const { client, proto } = require("../../../Services/grpcClient");

export const DeletePartition = () => {
  const [selectedPartition, setSelectedPartition] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange1 = (e) => {
    setSelectedPartition(e.target.value);
  };
  const Optionchange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    { value: "", label: "Select an Option" },
    { value: "1", label: "ubi" },
    { value: "2", label: "mmcblk0" },
  ];
  const PartDeleteRequest = () => {
    const request = new proto.grpc.PartDeleteRequest();
    request.setPartition(selectedPartition);
    request.setRequired(true);
    request.setDevice();

    client.partDelete(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        toast.error("Error !!!");
        return;
      }
      toast.success("Deleted !!! ");
    });
  };

  return (
    <>
      <div
        className={` w-full flex items-center flex-col  justify-center gap-6 ${
          isLoaderActive ? "opacity-70 backdrop-blur-sm" : "opacity-100"
        }`}
        style={isLoaderActive ? { filter: "blur(4px)" } : {}}
      >
        <div className="rounded-lg  p-6 w-full flex  md:flex-row  flex-col items-start justify-start gap-5">
          <div className=" mx-auto	">
            <label
              htmlFor="partition"
              className="block text-gray-700 font-semibold mb-2"
            >
              Partition:
            </label>
            <input
              type="text"
              id="partition"
              onChange={handleChange1}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter partition"
            />
          </div>

          {/*           <div className="w-1/2 mx-auto	">
            <label
              htmlFor="param-select"
              className=" text-gray-700 font-semibold mb-2 hidden md:block"
            >
              Select Option:
            </label>
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={Optionchange}
              value={selectedOption}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}
        </div>
        <button
          type="button"
          onClick={() => {
            PartDeleteRequest();
          }}
          className="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
};
