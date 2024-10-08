import { Request, Response } from "express";
import { CreateTabelaPreco } from "../../usecase/tabela-preco/create-tabela-preco";
import { TabelaPrecoModel } from "../../model/tabela-preco/tabela-preco-model";

export class CreateTabelaPrecoController {
  async handle(req: Request, res: Response) {
    const tabelaPrecoFormated = new TabelaPrecoModel(req.body);
    const responseTabelaPreco = await new CreateTabelaPreco().execute(
      tabelaPrecoFormated
    );
    return res.status(responseTabelaPreco.code).send(responseTabelaPreco);
  }
}
