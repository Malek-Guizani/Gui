import React, { useEffect, useState } from "react";
import { Loader } from "shared/Loader";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../services/grpcClient");
export const PpUpdate = () => {
  const [Status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const PpUpdateRequest = () => {
    if (!selectedFile?.name) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.PpUpdateRequest();
    request.setFile(selectedFile?.name);

    setLoaderActive(true);
    client.ppUpdate(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }

      toast.success("Permanent Parameter Updated !!!");
      setLoaderActive(false);
    });
  };

  /* useEffect(() => {
    if (Status === "Success") {
      setLoaderActive(false);
      toast.success("Permanent Parameter Updated !!!");
    }
    setStatus("Null");
  }, [Status]); */

  return (
    <React.Fragment>
      {isLoaderActive && (
        <div>
          <Loader />
        </div>
      )}
      <div
        className={
          isLoaderActive
            ? "opacity-70 backdrop-blur-sm flex flex-col gap-6"
            : "opacity-100 flex flex-col gap-6"
        }
        style={isLoaderActive ? { filter: "blur(4px)" } : {}}
      >
        <div className="">
          <label
            htmlFor="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            Device:
          </label>
          <input
            type="file"
            id="device"
            className="w-[90%] md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              PpUpdateRequest();
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Permanent Parameters
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </React.Fragment>
  );
};
