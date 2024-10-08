import express from "express";
import { ConsultAllFornecedorController } from "../controller/fornecedor/consult-all-fornecedor-controller";
import { ConsultFornecedorByIdController } from "../controller/fornecedor/consult-fornecedor-by-id-controller";
import { CreateFornecedorController } from "../controller/fornecedor/create-fornecedor-controller";
import { DeleteFornecedorController } from "../controller/fornecedor/delete-fornecedor-controller";
import { UpdateClienteController } from "../controller/fornecedor/update-fornecedor-controller";

const router = express.Router();

router.get(
  "/fornecedor/consult/all",
  new ConsultAllFornecedorController().handle
);

router.get(
  "/fornecedor/consult/:idFornecedor",
  new ConsultFornecedorByIdController().handle
);

router.post("/fornecedor/create", new CreateFornecedorController().handle);

router.put(
  "/fornecedor/update/:idFornecedor",
  new UpdateClienteController().handle
);

router.delete(
  "/produto/delete/:fornecedorId",
  new DeleteFornecedorController().handle
);

export default router;
