import React, { useState } from "react";
import { MSuccess } from "shared/MSuccess";
import { Loader } from "shared/Loader";


const { client, proto } = require("../../../services/grpcClient");

export const MakePartition = () => {
  let [isOpenD, setIsOpenD] = useState(false);
  const [selectedPartition, setSelectedPartition] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);



  const MakePartRequest = () => {
    const request = new proto.grpc.MakePartRequest();
    request.setPartition(selectedPartition);
    request.setDevice(selectedDevice);
    request.setSize(selectedSize);
    
    setLoaderActive(true);
    client.makePart(request, {}, (err, response) => {
      console.log("mmmmmmmmmm",request);
      if (err) {
        console.error(err);
        return;
      }

      console.log(response.getStatus());

      setStatus(response.getStatus());
    });
  };

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
          />
        </div>
      </div>
      <button
        onClick={() => {
          MakePartRequest();
        }}
        type="button"
        class="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        onClick={() => {
          setIsOpenD(true);
        }}
      >
        Make
      </button>
      <MSuccess
        message="Make done !!!"
        isOpenM={isOpenD}
        closeModal={() => setIsOpenD(false)}
      />
    </div>
  );
};
