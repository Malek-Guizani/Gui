import React, { useEffect, useState } from "react";
import { Loader } from "shared/Loader";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../services/grpcClient");
export const FirmwareUpgrade = () => {
  const [Status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const SfwUpRequest = () => {
    if (!selectedFile?.name || !selectedOption) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.SfwUpRequest();
    request.setSfwupsectionkind(selectedOption);
    request.setPayload(selectedFile?.name);
    request.setSection(1);

    setLoaderActive(true);
    client.sfwUp(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }

      setStatus(response.getStatus());
    });
  };

  useEffect(() => {
    if (Status == "Success") {
      setLoaderActive(false);
      toast.success("Software upgraded !!!");
    }
    setStatus("Null");
  }, [Status]);

  const [selectedOption, setSelectedOption] = useState("");
  const Optionchange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    { value: "", label: "Select an Option" },
    { value: "Operational", label: " Operational" },
    { value: "Rescue", label: "Rescue" },
  ];

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
        <select
          id="param-select"
          className="p-2 border border-gray-300 rounded-md md:w-[20rem]"
          onChange={Optionchange}
          value={selectedOption}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="">
          <label
            for="device"
            className="block text-gray-700 font-semibold mb-2"
          >
            Device:
          </label>
          <input
            type="file"
            id="device"
            className="w-full md:max-w-max px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter device"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              SfwUpRequest();
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Firmware Upgrade
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
