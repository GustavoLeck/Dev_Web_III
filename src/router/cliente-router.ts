import express from "express";
import { CreateClienteController } from "../controller/cliente/create-cliente-conttroller";
import { ConsultAllClienteController } from "../controller/cliente/consult-all-cliente-controller";

const router = express.Router();

router.get("/cliente/consult/all", new ConsultAllClienteController().handle);

router.post("/cliente/create", new CreateClienteController().handle);

export default router;
