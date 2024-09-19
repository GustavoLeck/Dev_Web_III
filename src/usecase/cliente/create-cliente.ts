import { ClienteDb } from "../../infrastructure/db/cliente-db";
import { Cliente } from "../../interface/cliente/cliente-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";
export class CreateCliente {
  async execute(cliente: Cliente): Promise<Response> {
    const createCliente = await new ClienteDb().create(cliente);
    if (!createCliente.status) {
      await new CreateLog().execute(createCliente);
    }
    return createCliente;
  }
}
