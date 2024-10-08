import { TabelaPrecoDb } from "../../infrastructure/db/tabela_preco-db";
import { Response } from "../../interface/response-interface";
import { tabela_preco } from "../../interface/tabela_preco/tabela_preco-interface";
import { CreateLog } from "../create-log";

export class UpdateTabelaPreco {
  async execute(
    idTabela: string,
    tabelaPreco: tabela_preco
  ): Promise<Response> {
    const updateTabelaPreco = await new TabelaPrecoDb().update(
      idTabela,
      tabelaPreco
    );
    if (!updateTabelaPreco.status) {
      await new CreateLog().execute(updateTabelaPreco);
    }
    return updateTabelaPreco;
  }
}
