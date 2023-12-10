import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const { client, proto } = require("../../../services/grpcClient");

export const NVRAM = () => {
  const [selectedFileSrc, setSelectedFileSrc] = useState([]);

  const handleFileChange1 = (event) => {
    setSelectedFileSrc(event.target.files[0]);
  };

  const WifiNvramUpdateRequest = () => {
    if (!selectedFileSrc?.name) {
      toast.warning(" input is empty");
      return;
    }

    const request = new proto.grpc.WifiNvramUpdateRequest();
    request.setFilesrc(selectedFileSrc?.name);
    request.setFiledst();

    client.wifiNvramUpdate(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        toast.error("Error !!!"); // Afficher la toast après l'expiration du délai
        return;
      }
    });
  };
  return (
    <React.Fragment>
      <article className="flex flex-col   mx-24 md:mx-auto w-full gap-5">
        <div className="">
          <label
            htmlFor="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            file Source:
          </label>
          <input
            type="file"
            id="device"
            className="  sm:w-[50%]  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleFileChange1}
          />
        </div>
        <div className="">
          <label
            htmlFor="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            file destination:
          </label>
          <input
            type="file"
            id="device"
            className=" sm:w-[50%]  px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            WifiNvramUpdateRequest();
          }}
          className="max-w-max mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </article>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </React.Fragment>
  );
};
