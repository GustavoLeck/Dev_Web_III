import { Request, Response } from "express";
import { ConsultAllProdutoTabela } from "../../usecase/produto-tabela/consult-all-produto-tabela";

export class ConsultAllProdutoTabelaController {
  async handle(req: Request, res: Response) {
    const responseProdutoTabela = await new ConsultAllProdutoTabela().execute();
    return res.status(responseProdutoTabela.code).send(responseProdutoTabela);
  }
}
