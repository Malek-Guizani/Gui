import React, { useState } from "react";

const proto = {};
proto.grpc = require("../../../services/refurb_grpc_web_pb.js");
const client = new proto.grpc.refurbClient(
  "http://192.168.1.5:8000",
  null,
  null
);

export const Ppset = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [ppStatus, SetppStatus] = useState(null);
  const [selectedParam, setSelectedParam] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange1 = (e) => {
    setSelectedParam(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedValue(e.target.value);
  };

  // deuxieme fonction pour la ppSet

  

  const PpSetRequest = () => {
    const request = new proto.grpc.PpSetRequest();
    request.setParam(selectedParam);
    request.setValue(selectedValue);

    client.ppSet(request, {}, (err, response) => {
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
    <main>
      <div className="flex flex-col gap-5">
        <div className="mb-4">
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleChange1}
            value={selectedParam}
          >
            <option value="">Sélectionnez une option</option>
            <option value="SERIAL_NUMBER">Serial Number</option>
            <option value="MANUFACTURER">Manufacturer</option>
            <option value="S_PRODUCT_ID">S_PRODUCT_ID</option>
            <option value="RAM_SIZE">RAM SIZE</option>
            <option value="WIFI_MAC1">WiFi MAC 1</option>
            <option value="WIFI_MAC2">Wifi MAC 2</option>
            <option value="COUNTRY_CODE">COUNTRY CODE</option>
            <option value="CLIENT_CERTIFICATE">CLIENT CERTIFICATE</option>
          </select>
        </div>
        <div className="">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Nouvelle Valeur"
            onChange={handleChange2}
            value={selectedValue}
          />
        </div>
        <button
        onClick={() => {
              PpSetRequest();
            }}
            type="button"
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
             Set New Value
        </button>
      </div>
    </main>
  );
}; 
