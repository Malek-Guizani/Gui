import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "App.css";
import Home from "components/Home";
import Not_found from "components/Not_found";
import { Service1 } from "components/Service1";
import { Cmd } from "components/Service2/Cmd";
import { Ppget } from "components/Service1/Ppget";
import { Ppset } from "components/Service1/Ppset";
import { Service2 } from "components/Service2";
import { Souservice21 } from "shared/Souservice21";
import { Upgrade } from "components/Upgrade";
import { SoftwareUpgrade } from "components/Upgrade/SoftwareUpgrade";
import { FirmwareUpgrade } from "components/Upgrade/FirmwareUpgrade";
import { StartPage } from "components/StartPage";
import { Loader } from "shared/Loader";
import { Partition } from "components/Partition";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full font-PtSans flex items-start justify-center h-screen">
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="service1" element={<Service1 />}>
              <Route path="ppGet" element={<Ppget />} />
              <Route path="ppSet" element={<Ppset />} />
            </Route>
            <Route path="service2" element={<Service2 />}>
              <Route path="cmd" element={<Cmd />} />
              <Route path="Souservice21" element={<Souservice21 />} />
            </Route>
            <Route path="Upgrade" element={<Upgrade />}>
              <Route path="softwareUpgrade" element={<SoftwareUpgrade />} />
              <Route path="firmwareUpgrade" element={<FirmwareUpgrade />} />
            </Route>
            <Route path="Partition" element={<Partition />}></Route>
          </Route>
          <Route path="*" element={<Not_found />} />
          <Route path="/" element={<StartPage />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
