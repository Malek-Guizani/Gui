import React, { useState } from "react";

const { client, proto } = require("../../../services/grpcClient");

export const BackupPartition = () => {
  const [ppMessage, SetppMessage] = useState(null);
  const [selectedText, setSelectedText] = useState("");

  const [satus, setStatus] = useState(null);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const BackupPartRequest = () => {
    const request = new proto.grpc.BackupPartRequest();
    request.setPartition(selectedText);

    client.backupPart(request, {}, (err, response) => {
      console.log(request);
      if (err) {
        console.error(err);
        return;
      }

      console.log(response.getStatus());

      setStatus(response.getStatus());
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row justify-start items-center gap-5">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Name of partition"
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => {
              BackupPartRequest();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Backup Partition
          </button>
        </div>
      </div>
    </div>
  );
};
