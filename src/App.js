import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "App.css";
import Home from "Components/Home";
import NotFound from "Components/NotFound";
import { PermanentParameters } from "Components/PermanentParameters";
import { Cmd } from "Components/Others/Cmd";
import { PpSet } from "Components/PermanentParameters/PpSet";
import { Other } from "Components/Others";
import { BackupPartition } from "Components/Partition/BackupPartition";
import { Upgrade } from "Components/Upgrade";
import { FirmwareUpgrade } from "Components/Upgrade/FirmwareUpgrade";
import { StartPage } from "Components/StartPage";
import { Partition } from "Components/Partition";
import { PpUpdate } from "Components/PermanentParameters/PpUpdate";
import { MakePartition } from "Components/Partition/MakePartition";
import { UpdatePartition } from "Components/Partition/UpdatePartition";
import "react-toastify/dist/ReactToastify.min.css";
import { DeletePartition } from "Components/Partition/DeletePartition";
import { PpIf } from "Components/PermanentParameters/PpIf";
import { SboxApply } from "Components/Others/SboxApply ";
import { PpSwap } from "Components/PermanentParameters/PpSwap";
import { NvRam } from "Components/Others/NvRam";
import { PpGet } from "Components/PermanentParameters/PpGet";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full font-PtSans flex items-start justify-center h-screen">
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="PermanentParameters" element={<PermanentParameters />}>
              <Route path="ppGet" element={<PpGet />} />
              <Route path="ppSet" element={<PpSet />} />
              <Route path="ppUpdate" element={<PpUpdate />} />
              <Route path="ppIf" element={<PpIf />} />
              <Route path="PpSwap" element={<PpSwap />} />
            </Route>
            <Route path="other" element={<Other />}>
              <Route path="cmd" element={<Cmd />} />
              <Route path="NVRAM" element={<NvRam />} />
              <Route path="SboxApply" element={<SboxApply />} />
            </Route>
            <Route path="Upgrade" element={<Upgrade />}>
              <Route path="firmwareUpgrade" element={<FirmwareUpgrade />} />
            </Route>
            <Route path="Partition" element={<Partition />}>
              <Route path="backupPartition" element={<BackupPartition />} />
              <Route path="MakePartition" element={<MakePartition />} />
              <Route path="UpdatePartition" element={<UpdatePartition />} />
              <Route path="DeletePartition" element={<DeletePartition />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
