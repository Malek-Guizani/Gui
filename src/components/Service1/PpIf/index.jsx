import React, { useState } from "react";
import Equal from "../../../Assets/svg/equal-svgrepo-com.svg";
import NotEqual from "../../../Assets/svg/not-equal-svgrepo-com.svg";
import Fleche from "../../../Assets/icons8-flèche-100.png";

export const PpIf = () => {
  const options = [
    { value: "", label: "Sélectionnez une option" },
    { value: "tbd", label: "tbd" },
  ];

  const options2 = [
    { value: "", label: "Sélectionnez une option" },
    { value: "tbd", label: "tbd2" },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const [selectedParam, setSelectedParam] = useState("");
  const [selectedParam2, setSelectedParam2] = useState("");
  const handleChange = (e) => {
    setSelectedParam(e.target.value);
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
            onChange={handleChange}
            value={selectedParam}
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
            placeholder="Nouvelle Valeur"
            onChange={(e) => setSelectedValue(e.target.value)}
            value=""
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
              placeholder="Nouvelle Valeur"
              onChange={(e) => setSelectedValue(e.target.value)}
              value=""
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max">
            Ok
          </button>
        </div>
      </div>
    </>
  );
};
