import express from "express";
import { ConsultAllTabelaPrecoController } from "../controller/tabela-preco/consult-all-tabela-preco-controller";
import { ConsultAllTabelaPrecoByIdController } from "../controller/tabela-preco/consult-tabela-preco-by-id-controller";
import { CreateTabelaPrecoController } from "../controller/tabela-preco/create-tabela-preco-controller";
import { UpdateTabelaPrecoController } from "../controller/tabela-preco/update-tabela-preco-controller";
import { DeleteTabelaPrecoController } from "../controller/tabela-preco/delete-tabela-preco-controller";

const router = express.Router();

router.get(
  "/tabelapreco/consult/all",
  new ConsultAllTabelaPrecoController().handle
);

router.get(
  "/tabelapreco/consult/:idTabela",
  new ConsultAllTabelaPrecoByIdController().handle
);

router.post("/tabelapreco/create", new CreateTabelaPrecoController().handle);

router.put(
  "/tabelapreco/update/:idTabela",
  new UpdateTabelaPrecoController().handle
);

router.delete(
  "/tabelapreco/delete/:idTabela",
  new DeleteTabelaPrecoController().handle
);

export default router;
