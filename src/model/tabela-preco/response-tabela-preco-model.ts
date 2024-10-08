import { tabela_preco } from "../../interface/tabela_preco/tabela_preco-interface";
import { TabelaPrecoModel } from "./tabela-preco-model";

export class ResponseTabelaPrecoModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<tabela_preco>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<tabela_preco>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formatTabelaPreco(data);
  }
  formatTabelaPreco(tabelaPreco: any): Array<tabela_preco> {
    const listTabelaPreco = Array<tabela_preco>();
    if (
      tabelaPreco != null &&
      tabelaPreco != undefined &&
      tabelaPreco.length > 0
    ) {
      for (const tabPre of tabelaPreco) {
        const tabelaPrecoFormated = new TabelaPrecoModel(tabPre);
        listTabelaPreco.push(tabelaPrecoFormated);
      }
      return listTabelaPreco;
    }
    tabelaPreco["id"] = "";
    const tabelaPrecoFormated = new TabelaPrecoModel(tabelaPreco);
    listTabelaPreco.push(tabelaPrecoFormated);
    return listTabelaPreco;
  }
}
