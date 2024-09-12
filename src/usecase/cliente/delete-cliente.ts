import { ClienteDb } from "../../infrastructure/db/cliente-db";
import { CreateLog } from "../create-log";
import { Response } from "../../interface/response-interface";
export class DeleteCliente {
  async execute(id: string): Promise<Response> {
    const deleteCliente = await new ClienteDb().delete(id);
    if (!deleteCliente.status) {
      await new CreateLog().execute(deleteCliente);
    }
    return deleteCliente;
  }
}
