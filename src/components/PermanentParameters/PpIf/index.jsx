import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Equal from "../../../Assets/svg/equal-svgrepo-com.svg";
import NotEqual from "../../../Assets/svg/not-equal-svgrepo-com.svg";
import Fleche from "../../../Assets/icons8-flèche-100.png";
import { options, options2 } from "../../../DB/PP_data";
const { client, proto } = require("../../../services/grpcClient");

export const PpIf = () => {
  const [ppStatus, SetppStatus] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedParam1, setSelectedParam1] = useState("");
  const [selectedParam2, setSelectedParam2] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("==");

  //Cette fonction est pour récupérer le valeur de selectedParam1
  const PpGetRequest = (callback) => {
    if (!selectedParam1) {
      toast.warning("Select an option");
      return;
    }
    const request = new proto.grpc.PpGetRequest();
    request.setParam(selectedParam1);

    client.ppGet(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      const Message = response.getMessage();
      callback(Message);
    });
  };

  const PpIfRequest = (Message) => {
    console.log("message : ", Message);
    if (
      !selectedValue1 ||
      !selectedValue2 ||
      !selectedParam1 ||
      !selectedParam2
    ) {
      toast.warning("Select an Option");
      return;
    }
    
    let condition;
    switch (selectedCondition) {
      case "==":
        condition = Message === selectedValue1;
        break;
      case "!=":
        condition = Message !== selectedValue1;
        break;
      default:
        toast.warning("Wrong Condition");
        return;
    }

    if (condition) {
      const request = new proto.grpc.PpIfRequest();
      request.setParam1(selectedParam1);
      request.setCondition(selectedCondition);
      request.setValue1(selectedValue1);
      request.setParam2(selectedParam2);
      request.setValue2(selectedValue2);
      request.setParam3();
      request.setValue3();
      client.ppIf(request, {}, (err, response) => {
        if (err) {
          console.error(err);
          //setLoaderActive(false);
          toast.error("Error !!!");
        } else {
          SetppStatus(response.getStatus());
        }
      });
    } else {
      toast.warning("Wrong Condition");
      return;
    }
  };

  useEffect(() => {
    if (ppStatus === "Success") {
      toast.success("done !!! ");
    }
    SetppStatus("Null");
  }, [ppStatus]);

  return (
    <>
      <div>Condition : </div>
      <div>
        <div className="flex flex-row mt-6 mb-5 items-center">
          <p className="md:m-5 text-center"> IF </p>
          <select
            id="param-select"
            className="p-2 border border-gray-300 rounded-md  md:h-10 md:w-60"
            onChange={(e) => {
              setSelectedParam1(e.target.value);
            }}
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
              <input
                type="radio"
                value="="
                name="Condition"
                checked={selectedCondition === "=="}
                onChange={() => setSelectedCondition("==")}
              />
              <img className="max-w-[1.25rem]" src={Equal} alt="Equal" />
            </label>
            <label className="flex md:gap-3">
              <input
                type="radio"
                value="!="
                name="Condition"
                checked={selectedCondition === "!="}
                onChange={() => setSelectedCondition("!=")}
              />
              <img className="max-w-[1.25rem]" src={NotEqual} alt="NotEqual" />
            </label>
          </div>

          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md max-w-[10rem]"
            placeholder="Value 1"
            onChange={(e) => {
              setSelectedValue1(e.target.value);
            }}
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
              placeholder="Value 2"
              onChange={(e) => setSelectedValue2(e.target.value)}
              value={selectedValue2}
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              PpGetRequest((Message) => {
                // Après que PpGetRequest est terminé, appelez PpIfRequest
                PpIfRequest(Message);
              });
            }}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max"
          >
            Execute
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
      />
    </>
  );
};
