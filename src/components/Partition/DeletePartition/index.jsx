import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "shared/Loader";

const { client, proto } = require("../../../services/grpcClient");

export const DeletePartition = () => {
  const [selectedText, setSelectedText] = useState("");
  const [status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const Optionchange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    { value: "", label: "Sélectionnez une option" },
    { value: "1", label: " 1" },
    { value: "2", label: "2" },
  ];

  useEffect(() => {
    // Comparer la valeur actuelle de ppStatus avec l'ancienne valeur
    if (status == "Success") {
      setLoaderActive(false);
      toast.success("deleted completed !!!"); // Afficher la toast après l'expiration du délai
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
        className={` w-full flex items-center flex-col  justify-center gap-6 ${
          isLoaderActive ? "opacity-70 backdrop-blur-sm" : "opacity-100"
        }`}
        style={isLoaderActive ? { filter: "blur(4px)" } : {}}
      >
        <div className="  rounded-lg  p-6 w-full flex  md:flex-row  flex-col items-start justify-start gap-5">
          <div className="w-1/2 mx-auto	">
            <label
              for="partition"
              className="block text-gray-700 font-semibold mb-2"
            >
              Partition:
            </label>
            <input
              type="text"
              id="partition"
              //onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter partition"
            />
          </div>

          <div className="w-1/2 mx-auto	">
            <label
              htmlFor="param-select"
              className=" text-gray-700 font-semibold mb-2 hidden md:block"
            >
              Select Option:
            </label>
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={Optionchange}
              value={selectedOption}
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
          type="button"
          onClick={() => {
            //UpdatePartRequest();
          }}
          class="w-[20rem] bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
};
