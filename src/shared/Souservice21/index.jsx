import React, { useState } from "react";

import { Link } from "react-router-dom";
const proto = {};
proto.grpc = require("../../services/refurb_grpc_web_pb.js");
const client = new proto.grpc.refurbClient(
  "http://192.168.1.5:8000",
  null,
  null
);

export const Souservice21 = () => {
  return <div>S2</div>;
};
