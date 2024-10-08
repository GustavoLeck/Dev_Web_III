import { Request, Response } from "express";
import { ConsultAllTabelaPrecoById } from "../../usecase/tabela-preco/consult-tabela-preco-by-id";

export class ConsultAllTabelaPrecoByIdController {
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
    const responseTabelaPreco = await new ConsultAllTabelaPrecoById().execute(
      idTabela
    );
    return res.status(responseTabelaPreco.code).send(responseTabelaPreco);
  }
}
