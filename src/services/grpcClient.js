const proto = {};
proto.grpc = require("./refurb_grpc_web_pb.js");
const client = new proto.grpc.RefurbishingClient(
  "http://192.168.1.5:8000",
  null,
  null
);

module.exports = {
  client,
  proto,
};
