import express from "express";
import { CreateClienteController } from "../controller/cliente/create-cliente-controller";
import { ConsultAllClienteController } from "../controller/cliente/consult-all-cliente-controller";
import { DeleteClienteController } from "../controller/cliente/delete-cliente-controller";
import { ConsultClienteByIdController } from "../controller/cliente/consult-client-by-id-controller";
import { UpdateClienteController } from "../controller/cliente/update-cliente-controller";

const router = express.Router();

router.get("/cliente/consult/all", new ConsultAllClienteController().handle);

router.get(
  "/cliente/consult/:idCliente",
  new ConsultClienteByIdController().handle
);

router.post("/cliente/create", new CreateClienteController().handle);

router.put("/cliente/update/:idCliente", new UpdateClienteController().handle);

router.delete(
  "/cliente/delete/:idCliente",
  new DeleteClienteController().handle
);

export default router;
