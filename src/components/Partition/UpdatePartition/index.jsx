import React, { useState } from "react";

const { client, proto } = require("../../../services/grpcClient");

export const UpdatePartition = () => {
  const [selectedText, setSelectedText] = useState("");
  const [satus, setStatus] = useState(null);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const UpdatePartRequest = () => {
    const request = new proto.grpc.UpdatePartRequest();
    request.setPartition("permanent_param");
    request.setFile("backup-YAAQ2208A052-permanent_param.bin");
    console.log(request);
    client.updatePart(request, {}, (err, response) => {
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
            Img:
          </label>
          <input
            type="file"
            id="device"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          UpdatePartRequest();
        }}
        class="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
      >
        Update
      </button>
    </div>
  );
};
