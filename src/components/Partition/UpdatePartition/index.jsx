import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "shared/Loader";

const { client, proto } = require("../../../services/grpcClient");

export const UpdatePartition = () => {
  const [selectedText, setSelectedText] = useState("");
  const [status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const UpdatePartRequest = () => {
    const request = new proto.grpc.UpdatePartRequest();
    request.setPartition(selectedText);
    request.setFile(selectedFile?.name);
    console.log(request);
    setLoaderActive(true);
    client.updatePart(request, {}, (err, response) => {
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
      setLoaderActive(false);
      toast.success("update completed !!!"); // Afficher la toast après l'expiration du délai
    }
    setStatus("Null");
  }, [status]);

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
              for="partition"
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
              for="device"
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
            UpdatePartRequest();
          }}
          class="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
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
