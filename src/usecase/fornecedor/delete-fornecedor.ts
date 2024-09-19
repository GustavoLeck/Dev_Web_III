import { FornecedorDb } from "../../infrastructure/db/fornecedor-db";
import { CreateLog } from "../create-log";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
export class DeleteFornecedor {
  async execute(id: string): Promise<Response> {
    if (id === "") {
      return new ResponseModel(
        false,
        406,
        "Erro ao deletar fornecedor, id não foi fornecido",
        {}
      );
    }
    const deleteFornecedor = await new FornecedorDb().delete(id);
    if (!deleteFornecedor.status) {
      await new CreateLog().execute(deleteFornecedor);
    }
    return deleteFornecedor;
  }
}
