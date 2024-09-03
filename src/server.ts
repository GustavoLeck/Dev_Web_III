import express from "express";
import bodyParser from "body-parser";
const server = express();
import Status from "./router/status_router";

server.use(bodyParser.json());

server.use("/api", Status);
export { server };
