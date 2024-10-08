import { Request, Response } from "express";
import { UpdateProdutoTabela } from "../../usecase/produto-tabela/update-produto-tabelas";
import { ProdutoTabelaModel } from "../../model/produto-tabela/produto-tabela-model";

export class UpdateProdutoTabelaController {
  async handle(req: Request, res: Response) {
    const produtoTabelaFormated = new ProdutoTabelaModel(req.body);
    const responseProdutoTabela = await new UpdateProdutoTabela().execute(
      produtoTabelaFormated
    );
    return res.status(responseProdutoTabela.code).send(responseProdutoTabela);
  }
}
