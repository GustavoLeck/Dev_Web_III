import { ResponseTabelaPrecoModel } from "../../model/tabela-preco/response-tabela-preco-model";
import { TabelaPrecoProdutoDb } from "../../infrastructure/db/tabela_preco-produto";
import { CreateLog } from "../create-log";

export class ConsultAllTabelaPreco {
  async execute(): Promise<ResponseTabelaPrecoModel> {
    const responseTabelaPreco = await new TabelaPrecoProdutoDb().getAll();
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
