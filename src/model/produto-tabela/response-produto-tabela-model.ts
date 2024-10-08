import { tabela_produto } from "../../interface/tabela_produto/tabela_produto";
import { ProdutoTabelaModel } from "./produto-tabela-model";

export class ResponseProdutoTabelaModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<tabela_produto>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<tabela_produto>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formateProdutoTabela(data);
  }
  formateProdutoTabela(produtoTabela: any): Array<tabela_produto> {
    const listProdutoTabela = Array<tabela_produto>();
    if (
      produtoTabela != null &&
      produtoTabela != undefined &&
      produtoTabela.length > 0
    ) {
      for (const tabPre of produtoTabela) {
        const produtoTabelaFormated = new ProdutoTabelaModel(tabPre);
        listProdutoTabela.push(produtoTabelaFormated);
      }
      return listProdutoTabela;
    }
    produtoTabela["id"] = "";
    const produtoTabelaFormated = new ProdutoTabelaModel(produtoTabela);
    listProdutoTabela.push(produtoTabelaFormated);
    return listProdutoTabela;
  }
}
