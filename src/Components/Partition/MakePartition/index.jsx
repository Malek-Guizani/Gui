import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../Services/grpcClient");

export const MakePartition = () => {
  const [selectedPartition, setSelectedPartition] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleChange1 = (e) => {
    setSelectedPartition(e.target.value);
  };
  const handleChange2 = (e) => {
    setSelectedDevice(e.target.value);
  };
  const handleChange3 = (e) => {
    setSelectedSize(e.target.value);
  };
  const MakePartRequest = () => {
    if (!selectedPartition || !selectedDevice || !selectedSize) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.PartMakeRequest();
    request.setPartition(selectedPartition);
    request.setDevice(selectedDevice);
    request.setSize(selectedSize + selectedOption);

    client.partMake(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        toast.error("Error !!!");
        return;
      }
      toast.success("Maked !!!");
    });
  };

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "MiB", label: "MB" },
    { value: "KiB", label: "KB" },
  ];
  return (
    <div className=" flex items-center flex-col justify-center">
      <div className=" rounded-lg  p-6 w-[35rem] flex flex-row gap-5">
        <div className="min-w-min	">
          <label
            htmlFor="partition"
            className="block text-gray-700 font-semibold mb-2"
          >
            Partition:
          </label>
          <input
            type="text"
            id="partition"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter partition"
            onChange={handleChange1}
          />
        </div>
        <div className="">
          <label
            htmlFor="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            Device:
          </label>
          <input
            type="text"
            id="device"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleChange2}
          />
        </div>
        <div className="">
          <label
            htmlFor="size"
            className="block text-gray-700 font-semibold mb-2"
          >
            Size:
          </label>
          <input
            type="text"
            id="size"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter size"
            onChange={handleChange3}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Unity</label>
          <select
            id="param-select"
            className="p-2  border border-gray-300 rounded-md  max-w-min"
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={() => {
          MakePartRequest();
          //toast.success("Maked !!!");
        }}
        type="button"
        className="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
      >
        Making partition completed
      </button>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </div>
  );
};
