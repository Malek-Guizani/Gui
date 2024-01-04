import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "Shared/Loader";

const { client, proto } = require("../../../Services/grpcClient");

export const UpdatePartition = () => {
  const [selectedText, setSelectedText] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const PartUpdateRequest = () => {
    if (!selectedText || !selectedFile?.name) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.PartUpdateRequest();
    request.setPartition(selectedText);
    request.setFile(selectedFile?.name);
    setLoaderActive(true);
    client.partUpdate(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }
      toast.success("Update completed !!! ");
      setLoaderActive(false);
    });
  };

  return (
    <>
      {isLoaderActive && (
        <div>
          <Loader />
        </div>
      )}
      <div
        className={`flex items-center flex-col justify-center gap-6 ${
          isLoaderActive ? "opacity-70 backdrop-blur-sm" : "opacity-100"
        }`}
        style={isLoaderActive ? { filter: "blur(4px)" } : {}}
      >
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
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter partition"
            />
          </div>
          <div className="">
            <label
              htmlFor="device"
              className="block text-gray-700 font-semibold mb-2"
            >
              Img:
            </label>
            <input
              type="file"
              id="device"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter device"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            PartUpdateRequest();
          }}
          className="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Update
        </button>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          autoClose={3000}
        />
      </div>
    </>
  );
};
