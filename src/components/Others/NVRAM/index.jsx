import React, { useEffect, useState } from "react";

const { client, proto } = require("../../../services/grpcClient");

export const NVRAM = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
            onChange={handleFileChange}
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
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            // PpUpdateRequest();
          }}
          className=" mx-auto max-w-max mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </article>
    </React.Fragment>
  );
};
