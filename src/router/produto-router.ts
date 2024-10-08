import express from "express";
import { ConsultAllProdutoController } from "../controller/produto/consult-all-produto-controller";
import { ConsultProdutoByIdController } from "../controller/produto/consult-produto-by-id";
import { CreateProdutoController } from "../controller/produto/create-produto-controller";
import { UpdateProdutoController } from "../controller/produto/update-produto-controller";
import { DeleteProdutoController } from "../controller/produto/delete-produto-controller";

const router = express.Router();

router.get("/produto/consult/all", new ConsultAllProdutoController().handle);

router.get(
  "/produto/consult/:idProduto",
  new ConsultProdutoByIdController().handle
);

router.post("/produto/create", new CreateProdutoController().handle);

router.put("/produto/update/:idProduto", new UpdateProdutoController().handle);

router.delete(
  "/produto/delete/:idProduto",
  new DeleteProdutoController().handle
);

export default router;
