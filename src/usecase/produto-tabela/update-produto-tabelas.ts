import { TabelaPrecoProdutoDb } from "../../infrastructure/db/tabela_preco-produto";
import { Response } from "../../interface/response-interface";
import { tabela_produto } from "../../interface/tabela_produto/tabela_produto";
import { CreateLog } from "../create-log";

export class UpdateProdutoTabela {
  async execute(value: tabela_produto): Promise<Response> {
    const udpateProdutoTabela = await new TabelaPrecoProdutoDb().updatePreco(
      value
    );
    if (!udpateProdutoTabela.status) {
      await new CreateLog().execute(udpateProdutoTabela);
    }
    return udpateProdutoTabela;
  }
}
