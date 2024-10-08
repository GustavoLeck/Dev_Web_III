import { Request, Response } from "express";
import { ConsultAllTabelaPreco } from "../../usecase/tabela-preco/consult-all-tabela-preco";

export class ConsultAllTabelaPrecoController {
  async handle(req: Request, res: Response) {
    const responseTabelaPreco = await new ConsultAllTabelaPreco().execute();
    return res.status(responseTabelaPreco.code).send(responseTabelaPreco);
  }
}
