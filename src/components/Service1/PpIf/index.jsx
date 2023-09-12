import React, { useState } from "react";
import Equal from "../../../Assets/svg/equal-svgrepo-com.svg";
import NotEqual from "../../../Assets/svg/not-equal-svgrepo-com.svg";
import Fleche from "../../../Assets/icons8-flèche-100.png";
const { client, proto } = require("../../../services/grpcClient");


export const PpIf = () => {
  const options = [
    { value: "", label: "Sélectionnez une option" },
    { value: "SERIAL_NUMBER", label: "Serial Number" },
    { value: "MANUFACTURER", label: "Manufacturer" },
    { value: "S_PRODUCT_ID", label: "S_PRODUCT_ID" },
    { value: "RAM_SIZE", label: "RAM SIZE" },
    { value: "WIFI_MAC1", label: "WiFi MAC 1" },
    { value: "WIFI_MAC2", label: "Wifi MAC 2" },
    { value: "COUNTRY_CODE", label: "COUNTRY CODE" },
    { value: "CLIENT_CERTIFICATE", label: "CLIENT CERTIFICATE" },
    { value: "S_HARDWARE_VERSION", label: "S_HARDWARE_VERSION" },
    { value: "C_HARDWARE_REVISION", label: "C_HARDWARE_REVISION" },
    { value: "PRIVATE_KEY", label: "PRIVATE_KEY" },
    { value: "CERTIFICATE", label: "CERTIFICATE" },
    { value: "DSA", label: "DSA" },
    { value: "VENDOR_INFO1", label: "VENDOR_INFO1" },
    { value: "VENDOR_INFO2", label: "VENDOR_INFO2" },
    { value: "VENDOR_INFO3", label: "VENDOR_INFO3" },
  ];

  const options2 = [
    { value: "", label: "Sélectionnez une option" },
    { value: "SERIAL_NUMBER", label: "Serial Number" },
    { value: "MANUFACTURER", label: "Manufacturer" },
    { value: "S_PRODUCT_ID", label: "S_PRODUCT_ID" },
    { value: "RAM_SIZE", label: "RAM SIZE" },
    { value: "WIFI_MAC1", label: "WiFi MAC 1" },
    { value: "WIFI_MAC2", label: "Wifi MAC 2" },
    { value: "COUNTRY_CODE", label: "COUNTRY CODE" },
    { value: "CLIENT_CERTIFICATE", label: "CLIENT CERTIFICATE" },
    { value: "S_HARDWARE_VERSION", label: "S_HARDWARE_VERSION" },
    { value: "C_HARDWARE_REVISION", label: "C_HARDWARE_REVISION" },
    { value: "PRIVATE_KEY", label: "PRIVATE_KEY" },
    { value: "CERTIFICATE", label: "CERTIFICATE" },
    { value: "DSA", label: "DSA" },
    { value: "VENDOR_INFO1", label: "VENDOR_INFO1" },
    { value: "VENDOR_INFO2", label: "VENDOR_INFO2" },
    { value: "VENDOR_INFO3", label: "VENDOR_INFO3" },
  ];
  const [ppStatus, SetppStatus] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedParam1, setSelectedParam1] = useState("");
  const [selectedParam2, setSelectedParam2] = useState("");

  const PpIfRequest = () => {
    const request = new proto.grpc.PpIfRequest();
    request.setParam1(selectedParam1);
    request.setCondition("==");
    request.setValue1(selectedValue1);
    request.setParam2(selectedParam2);
    request.setValue2(selectedValue2);
    request.setParam3();
    request.setValue3();

    client.ppIf(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(request);
      //Pour recuperer la valeur de status , status doit être "Success"
      SetppStatus(response.getStatus());
      console.log(ppStatus);
    });
  };

  return (
    <>
      <div>condition : </div>
      <div>
        <div className="flex flex-row mt-6 mb-5 items-center">
          <p className="md:m-5 text-center"> If </p>
          <select
            id="param-select"
            className="p-2 border border-gray-300 rounded-md  md:h-10 md:w-60"
            onChange={(e) => setSelectedParam1(e.target.value)}
            value={selectedParam1}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="mx-5 flex flex-col gap-1">
            <label className="flex md:gap-3">
              <input type="radio" value="=" name="test" defaultChecked />
              <img className="max-w-[1.25rem]" src={Equal} alt="Equal" />
            </label>
            <label className="flex md:gap-3">
              <input type="radio" value="<>" name="test" />
              <img className="max-w-[1.25rem]" src={NotEqual} alt="NotEqual" />
            </label>
          </div>

          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md max-w-[10rem]"
            placeholder="Valeur 1"
            onChange={(e) => setSelectedValue1(e.target.value)}
            value={selectedValue1}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center">
          <img className="max-w-[3rem]" src={Fleche} alt="Fleche" />

          <div className="flex flex-row gap-5">
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md md:h-10 md:w-60"
              onChange={(e) => setSelectedParam2(e.target.value)}
              value={selectedParam2}
            >
              {options2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md max-w-[14rem]"
              placeholder="Valeur 2"
              onChange={(e) => setSelectedValue2(e.target.value)}
              value={selectedValue2}
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button 
          onClick={() => {
            PpIfRequest();
          }}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max">
            Ok
          </button>
        </div>
      </div>
    </>
  );
};
