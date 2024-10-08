import { TabelaPrecoDb } from "../../infrastructure/db/tabela_preco-db";
import { Response } from "../../interface/response-interface";
import { tabela_preco } from "../../interface/tabela_preco/tabela_preco-interface";
import { CreateLog } from "../create-log";

export class CreateTabelaPreco {
  async execute(tabelaPreco: tabela_preco): Promise<Response> {
    const createTabelaPreco = await new TabelaPrecoDb().create(tabelaPreco);
    if (!createTabelaPreco.status) {
      await new CreateLog().execute(createTabelaPreco);
    }
    return createTabelaPreco;
  }
}
