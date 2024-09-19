import express from "express";
import { CreateClienteController } from "../controller/cliente/create-cliente-controller";
import { ConsultAllClienteController } from "../controller/cliente/consult-all-cliente-controller";
import { DeleteClienteController } from "../controller/cliente/delete-cliente-controller";
import { ConsultClientById } from "../usecase/cliente/consult-client-by-id";
import { ConsultClienteByIdController } from "../controller/cliente/consult-client-by-id-controller";

const router = express.Router();

router.get("/cliente/consult/all", new ConsultAllClienteController().handle);

router.get(
  "/cliente/consult/:idCliente",
  new ConsultClienteByIdController().handle
);

router.post("/cliente/create", new CreateClienteController().handle);

router.delete(
  "/cliente/delete/:idCliente",
  new DeleteClienteController().handle
);

export default router;
