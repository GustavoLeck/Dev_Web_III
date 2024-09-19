import { ClienteDb } from "../../infrastructure/db/cliente-db";
import { CreateLog } from "../create-log";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
export class DeleteCliente {
  async execute(id: string): Promise<Response> {
    if (id === "") {
      return new ResponseModel(
        false,
        406,
        "Erro ao deletar cliente, id não foi fornecido",
        {}
      );
    }
    const deleteCliente = await new ClienteDb().delete(id);
    if (!deleteCliente.status) {
      await new CreateLog().execute(deleteCliente);
    }
    return deleteCliente;
  }
}
