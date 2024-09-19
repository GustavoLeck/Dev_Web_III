import { Cliente } from "../../interface/cliente/cliente-interface";
import { ClienteModel } from "./cliente-model";
export class ResponseClienteModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<Cliente>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<Cliente>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formatClients(data);
  }
  formatClients(clientes: any): Array<Cliente> {
    const listClientes = Array<Cliente>();
    if (clientes != null && clientes != undefined && clientes.length > 0) {
      for (const cli of clientes) {
        const clienteFormated = new ClienteModel(cli);
        listClientes.push(clienteFormated);
      }
      return listClientes;
    }
    clientes["id"] = "";
    const clienteFormated = new ClienteModel(clientes);
    listClientes.push(clienteFormated);
    return listClientes;
  }
}
