import { Request, Response } from "express";
import { TabelaPrecoModel } from "../../model/tabela-preco/tabela-preco-model";
import { UpdateTabelaPreco } from "../../usecase/tabela-preco/update-tabela-preco";

export class UpdateTabelaPrecoController {
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
    const value = req.body;
    const tabelaPrecoFormated = new TabelaPrecoModel(value);
    const response = await new UpdateTabelaPreco().execute(
      idTabela,
      tabelaPrecoFormated
    );
    return res.status(response.code).send(response);
  }
}
