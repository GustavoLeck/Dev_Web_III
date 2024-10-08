import { Request, Response } from "express";
import { DeleteTabelaPreco } from "../../usecase/tabela-preco/delete-tabela-preco";

export class DeleteTabelaPrecoController {
  async handle(req: Request, res: Response) {
    const idTabela = req?.params?.idTabela;
    if (!idTabela) {
      return res.status(400).send({
        status: false,
        code: 400,
        message: "idTabela nao informado",
        data: [],
      });
    }
    const responseTabelaPreco = await new DeleteTabelaPreco().execute(idTabela);
    return res.status(responseTabelaPreco.code).send(responseTabelaPreco);
  }
}
