import { Request, Response } from "express";
import { CreateProdutoTabela } from "../../usecase/produto-tabela/create-produto-tabela";
import { ProdutoTabelaModel } from "../../model/produto-tabela/produto-tabela-model";

export class CreateProdutoTabelaController {
  async handle(req: Request, res: Response) {
    const produtoTabelaFormated = new ProdutoTabelaModel(req.body);
    const responseProdutoTabela = await new CreateProdutoTabela().execute(
      produtoTabelaFormated
    );
    return res.status(responseProdutoTabela.code).send(responseProdutoTabela);
  }
}
