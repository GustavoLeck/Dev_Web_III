import { TabelaPrecoProdutoDb } from "../../infrastructure/db/tabela_preco-produto";
import { ResponseProdutoTabela } from "../../interface/tabela_produto/response-produto-tabela";
import { ResponseProdutoTabelaModel } from "../../model/produto-tabela/response-produto-tabela-model";
import { CreateLog } from "../create-log";
export class ConsultAllProdutoTabela {
  async execute(): Promise<ResponseProdutoTabela> {
    const produtoTabela = await new TabelaPrecoProdutoDb().getAll();
    if (!produtoTabela.status) {
      await new CreateLog().execute(produtoTabela);
    }
    return new ResponseProdutoTabelaModel(
      produtoTabela.status,
      produtoTabela.code,
      produtoTabela.message,
      produtoTabela.data
    );
  }
}
