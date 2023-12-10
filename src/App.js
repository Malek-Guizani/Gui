import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "App.css";
import Home from "components/Home";
import NotFound from "components/NotFound";
import { PermanentParameters } from "components/PermanentParameters";
import { Cmd } from "components/Others/Cmd";
import { Ppget } from "components/PermanentParameters/Ppget";
import { Ppset } from "components/PermanentParameters/Ppset";
import { Other } from "components/Others";
import { BackupPartition } from "components/Partition/BackupPartition";
import { Upgrade } from "components/Upgrade";
import { SoftwareUpgrade } from "components/Upgrade/SoftwareUpgrade";
import { FirmwareUpgrade } from "components/Upgrade/FirmwareUpgrade";
import { StartPage } from "components/StartPage";
import { Partition } from "components/Partition";
import { PpUpdate } from "components/PermanentParameters/ppUpdate";
import { MakePartition } from "components/Partition/MakePartition";
import { UpdatePartition } from "components/Partition/UpdatePartition";
import "react-toastify/dist/ReactToastify.min.css";
import { DeletePartition } from "components/Partition/DeletePartition";
import { PpIf } from "components/PermanentParameters/PpIf";
import { NVRAM } from "components/Others/NVRAM";
import { SboxApply } from "components/Others/SboxApply ";
import { PpSwap } from "components/PermanentParameters/PpSwap";
import { PpList } from "components/PermanentParameters/PpList";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full font-PtSans flex items-start justify-center h-screen">
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="PermanentParameters" element={<PermanentParameters />}>
              <Route path="ppGet" element={<Ppget />} />
              <Route path="ppSet" element={<Ppset />} />
              <Route path="ppUpdate" element={<PpUpdate />} />
              <Route path="ppIf" element={<PpIf />} />
              <Route path="PpSwap" element={<PpSwap />} />
              <Route path="PpList" element={<PpList />} />
            </Route>
            <Route path="other" element={<Other />}>
              <Route path="cmd" element={<Cmd />} />
              <Route path="NVRAM" element={<NVRAM />} />
              <Route path="SboxApply" element={<SboxApply />} />
            </Route>
            <Route path="Upgrade" element={<Upgrade />}>
              <Route path="softwareUpgrade" element={<SoftwareUpgrade />} />
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
