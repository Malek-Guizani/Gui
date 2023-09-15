import React, { useEffect, useState } from "react";
import { MSuccess } from "shared/MSuccess";
import { Loader } from "shared/Loader";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../services/grpcClient");

export const MakePartition = () => {
  const [selectedPartition, setSelectedPartition] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

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
    const request = new proto.grpc.MakePartRequest();
    request.setPartition(selectedPartition);
    request.setDevice(selectedDevice);
    request.setSize(selectedSize);

    setLoaderActive(true);
    client.makePart(request, {}, (err, response) => {
      console.log("mmmmmmmmmm", request);
      if (err) {
        console.error(err);
        return;
      }

      console.log(response.getStatus());

      setStatus(response.getStatus());
    });
  };
  useEffect(() => {
    // Comparer la valeur actuelle de ppStatus avec l'ancienne valeur
    if (status == "Success") {
      console.log("before software upgrade");
      setLoaderActive(false);
      toast.success("Maked !!!"); // Afficher la toast après l'expiration du délai
    }
    console.log("after software upgrade");
    console.log("ppstatus: ", status);
    setStatus("Null");
  }, [status]);

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "MB", label: "MB" },
    { value: "KB", label: "KB" },
  ];
  return (
    <div className=" flex items-center flex-col justify-center">
      <div className=" rounded-lg  p-6 w-[35rem] flex flex-row gap-5">
        <div className="min-w-min	">
          <label
            for="partition"
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
            for="device"
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
          <label for="size" className="block text-gray-700 font-semibold mb-2">
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
          <label>unity</label>
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
