import React, { useState } from "react";
import { Loader } from "Shared/Loader";
import { toast, ToastContainer } from "react-toastify";
const { client, proto } = require("../../../Services/grpcClient");
export const FirmwareUpgrade = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const FwUpdateRequest = () => {
    if (!selectedFile?.name || !selectedOption) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.FwUpdateRequest();
    request.setComponent(selectedOption + "@1");
    request.setUrl("depot:" + selectedFile?.name);
    //request.setSection(1);
    console.log(request);
    setLoaderActive(true);
    client.fwUpdate(request, {}, (err, response) => {
      console.log(request);
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }
      toast.success("Success !!!");
      setLoaderActive(false);
      //setStatus(response.getStatus());
    });
  };

  const [selectedOption, setSelectedOption] = useState("");
  const Optionchange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    { value: "", label: "Select an Option" },
    { value: "pkgtb", label: " pkgtb" },
    { value: "gsdf", label: "gsdf" },
    { value: "brcm", label: "brcm" },
    { value: "ipl", label: "ipl" },
    { value: "modulexfw", label: "modulexfw" },
    { value: "nvram", label: "nvram" },
    { value: "pp", label: "pp" },
    { value: "spl", label: "spl" },
    { value: "system", label: "system" },
    { value: "tee", label: "tee" },
    { value: "tpl", label: "tpl" },
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
            htmlFor="device"
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
              FwUpdateRequest();
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
