import express from "express";
import bodyParser from "body-parser";
import Status from "./router/status-router";
import Cliente from "./router/cliente-router";

const server = express();
server.use(bodyParser.json());

server.use("/api", Status);
server.use("/api", Cliente);

export { server };
