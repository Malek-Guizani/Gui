import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "Shared/Loader";

const { client, proto } = require("../../../Services/grpcClient");

export const BackupPartition = () => {
  const [selectedText, setSelectedText] = useState("");
  const [ppMessage, SetppMessage] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const PartBackupRequest = () => {
    if (!selectedText) {
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.PartBackupRequest();
    request.setPartition(selectedText);
    setLoaderActive(true);
    client.partBackup(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!");
        return;
      }
      toast.success("Backup completed !!! ");
      setLoaderActive(false);
    });
  };

  //Pour récupérer la valeur de serial number
  const PpGetRequest = () => {
    const request = new proto.grpc.PpGetRequest();
    request.setName("SERIAL_NUMBER");

    client.ppGet(request, {}, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      SetppMessage(response.getValue());
    });
  };

  return (
    <div>
      {isLoaderActive && (
        <div>
          <Loader />
        </div>
      )}

      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row justify-start items-center gap-5">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Name of partition"
            onChange={(e) => {
              handleChange(e);
              PpGetRequest(e);
            }}
          />

          <button
            type="button"
            onClick={() => {
              PartBackupRequest();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Backup Partition
          </button>
        </div>
      </div>

      {selectedText && (
        <div className="mt-5">
          Please Verify that the file "backup-{ppMessage}-{selectedText}.bin"
          exists under /tftpboot before backing up the partition 😊
        </div>
      )}
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </div>
  );
};
