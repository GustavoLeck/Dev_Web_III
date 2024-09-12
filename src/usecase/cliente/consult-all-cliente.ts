import { ClienteDb } from "../../infrastructure/db/cliente-db";
import { ResponseCliente } from "../../interface/cliente/response-cliente-interface";
import { ResponseClienteModel } from "../../model/cliente/response-cliente-model";
import { CreateLog } from "../create-log";

export class ConsultAllCliente {
  async execute(): Promise<ResponseCliente> {
    const responseClientes = await new ClienteDb().getAll();

    if (!responseClientes.status) {
      await new CreateLog().execute(responseClientes);
    }

    return new ResponseClienteModel(
      responseClientes.status,
      responseClientes.code,
      responseClientes.message,
      responseClientes.data
    );
  }
}
