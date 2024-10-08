import { TabelaPrecoDb } from "../../infrastructure/db/tabela_preco-db";
import { ResponseTabelaPrecoModel } from "../../model/tabela-preco/response-tabela-preco-model";
import { CreateLog } from "../create-log";

export class ConsultAllTabelaPrecoById {
  async execute(id: string): Promise<ResponseTabelaPrecoModel> {
    const responseTabelaPreco = await new TabelaPrecoDb().getById(id);
    if (!responseTabelaPreco.status) {
      await new CreateLog().execute(responseTabelaPreco);
    }
    return new ResponseTabelaPrecoModel(
      responseTabelaPreco.status,
      responseTabelaPreco.code,
      responseTabelaPreco.message,
      responseTabelaPreco.data
    );
  }
}
