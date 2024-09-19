import { Fornecedor } from "../../interface/fornecedor/fornecedor-interface";
import { FornecedorModel } from "./fornecedor-model";
export class ResponseFornecedorModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<Fornecedor>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<Fornecedor>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formatClients(data);
  }
  formatClients(clientes: any): Array<Fornecedor> {
    const listClientes = Array<Fornecedor>();
    if (clientes != null && clientes != undefined && clientes.length > 0) {
      for (const cli of clientes) {
        const fornecedorFormated = new FornecedorModel(cli);
        listClientes.push(fornecedorFormated);
      }
      return listClientes;
    }
    clientes["id"] = "";
    const fornecedorFormated = new FornecedorModel(clientes);
    listClientes.push(fornecedorFormated);
    return listClientes;
  }
}
