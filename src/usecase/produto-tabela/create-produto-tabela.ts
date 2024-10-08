import { TabelaPrecoProdutoDb } from "../../infrastructure/db/tabela_preco-produto";
import { Response } from "../../interface/response-interface";
import { tabela_produto } from "../../interface/tabela_produto/tabela_produto";
import { CreateLog } from "../create-log";

export class CreateProdutoTabela {
  async execute(value: tabela_produto): Promise<Response> {
    const createProdutoTabela = await new TabelaPrecoProdutoDb().create(value);
    if (!createProdutoTabela.status) {
      await new CreateLog().execute(createProdutoTabela);
    }
    return createProdutoTabela;
  }
}
