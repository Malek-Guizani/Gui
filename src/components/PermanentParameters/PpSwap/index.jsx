import React from "react";
import { options, options2 } from "../../../DB/PP_data";
export const PpSwap = () => {
  return (
    <div className=" flex flex-col items-start">
      <div>SWAP : </div>
      <div className=" ">
        <div className="flex flex-row mt-6 mb-5 items-center gap-10">
          <p className="md:m-5 text-center"> Value 1 </p>
          <select
            id="param-select"
            className="p-2 border border-gray-300 rounded-md  md:h-10 md:w-60"
            //onChange={(e) => { setSelectedParam1(e.target.value); }}
            // value={selectedParam1}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row flex-wrap items-center  gap-10">
          <p className="md:m-5 text-center"> Value 2 </p>

          <div className="flex flex-row gap-5">
            <select
              id="param-select"
              className="p-2 border border-gray-300 rounded-md md:h-10 md:w-60"
              //onChange={(e) => setSelectedParam2(e.target.value)}
              //value={selectedParam2}
            >
              {options2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <button
            // onClick={() => {
            //   PpGetRequest((Message) => {
            //     // Après que PpGetRequest est terminé, appelez PpIfRequest
            //     PpIfRequest(Message);
            //   });
            // }}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max "
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};
