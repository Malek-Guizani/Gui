import React, { useEffect, useState } from "react";

const { client, proto } = require("../../../services/grpcClient");

export const NVRAM = () => {
  const [selectedFileSrc, setSelectedFileSrc] = useState([]);
  const [selectedFileDest, setSelectedFileDst] = useState([]);
  const [Status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange1 = (event) => {
    setSelectedFileSrc(event.target.files[0]);
  };
  const handleFileChange2 = (event) => {
    setSelectedFileDst(event.target.files[0]);
  };
  
  const WifiNvramUpdateRequest = () => {
    const request = new proto.grpc.WifiNvramUpdateRequest();
    request.setFilesrc(selectedFileSrc?.name);
    request.setFiledst();

    setLoaderActive(true);
    console.log(request);
    client.wifiNvramUpdate(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("NVRAM Updated");
      setStatus(response.getStatus());
    });
  };
  return (
    <React.Fragment>
      <article className="flex flex-col gap-5">
        <div className="">
          <label
            for="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            file Source:
          </label>
          <input
            type="file"
            id="device"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleFileChange1}
          />
        </div>
        <div className="">
          <label
            for="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            file destination:
          </label>
          <input
            type="file"
            id="device"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleFileChange2}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            WifiNvramUpdateRequest();
          }}
          className=" mx-auto max-w-max mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </article>
    </React.Fragment>
  );
};
