import { ClienteDb } from "../../infrastructure/db/cliente-db";
import { Cliente } from "../../interface/cliente/cliente-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";
export class UpdateCliente {
  async execute(idCliente: string, newCliente: Cliente): Promise<Response> {
    const updateCliente = await new ClienteDb().update(idCliente, newCliente);
    if (!updateCliente.status) {
      await new CreateLog().execute(updateCliente);
    }
    return updateCliente;
  }
}
