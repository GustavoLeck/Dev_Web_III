import { produto } from "../../interface/produto/produto-interface";
import { ProdutoModel } from "./produto-model";
export class ResponseProdutoModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<produto>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<produto>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formatProduto(data);
  }
  formatProduto(produto: any): Array<ProdutoModel> {
    const listProduto = Array<ProdutoModel>();
    if (produto != null && produto != undefined && produto.length > 0) {
      for (const prod of produto) {
        const produtoFormated = new ProdutoModel(prod);
        listProduto.push(produtoFormated);
      }
      return listProduto;
    }
    produto["id"] = "";
    const produtoFormated = new ProdutoModel(produto);
    listProduto.push(produtoFormated);
    return listProduto;
  }
}
