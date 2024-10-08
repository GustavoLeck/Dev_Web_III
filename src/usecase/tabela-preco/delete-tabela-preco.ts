import { TabelaPrecoDb } from "../../infrastructure/db/tabela_preco-db";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class DeleteTabelaPreco {
  async execute(idTabela: string): Promise<Response> {
    const deleteTabelaPreco = await new TabelaPrecoDb().delete(idTabela);
    if (!deleteTabelaPreco.status) {
      await new CreateLog().execute(deleteTabelaPreco);
    }
    return deleteTabelaPreco;
  }
}
