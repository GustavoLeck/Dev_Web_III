import express from "express";
import { ConsultAllProdutoTabelaController } from "../controller/produto-tabela/consult-all-produto-tabela-controller";
import { CreateProdutoTabelaController } from "../controller/produto-tabela/create-produto-tabela-controller";
import { UpdateProdutoTabelaController } from "../controller/produto-tabela/update-produto-tabela-controller";

const router = express.Router();

router.get(
  "/produtotabela/consult/all",
  new ConsultAllProdutoTabelaController().handle
);

router.post(
  "/produtotabela/create",
  new CreateProdutoTabelaController().handle
);

router.put("/produtotabela/udpate", new UpdateProdutoTabelaController().handle);

export default router;
