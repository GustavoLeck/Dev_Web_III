import express from "express";
import bodyParser from "body-parser";
import Status from "./router/status-router";
import Cliente from "./router/cliente-router";
import Fornecedores from "./router/fornecedor-router";
import Produto from "./router/produto-router";
import TabelaPreco from "./router/tabela-preco-router";
import ProdutoTabela from "./router/produto-tabela-router";

const server = express();
server.use(bodyParser.json());

server.use("/api", Status);
server.use("/api", Cliente);
server.use("/api", Fornecedores);
server.use("/api", Produto);
server.use("/api", TabelaPreco);
server.use("/api", ProdutoTabela);

export { server };
