import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "shared/Loader";

const { client, proto } = require("../../../services/grpcClient");

export const BackupPartition = () => {
  const [ppMessage, SetppMessage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoaderActive, setLoaderActive] = useState(false);

  const handleChange = (e) => {
    setSelectedText(e.target.value);
  };

  const BackupPartRequest = () => {
    if (!selectedText) {
      // Show a message to choose a value
      toast.warning(" input is empty");
      return;
    }
    const request = new proto.grpc.BackupPartRequest();
    request.setPartition(selectedText);
    setLoaderActive(true);
    client.backupPart(request, {}, (err, response) => {
      console.log("mm", request);
      if (err) {
        console.error(err);
        setLoaderActive(false);
        toast.error("Error !!!"); // Afficher la toast après l'expiration du délai
        return;
      }

      console.log(response.getStatus());

      setStatus(response.getStatus());
    });
  };

  useEffect(() => {
    // Comparer la valeur actuelle de ppStatus avec l'ancienne valeur
    if (status == "Success") {
      setLoaderActive(false);
      toast.success("Backup completed !!! ");
    }
    setStatus("Null");
  }, [status]);

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

      {selectedText && (
        <div className="mt-5">
          Please Verify that the file "backup-SerialNUmber-{selectedText}.bin"
          exists under /tftpboot 😊
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
