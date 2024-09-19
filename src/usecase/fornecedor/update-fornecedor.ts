import { FornecedorDb } from "../../infrastructure/db/fornecedor-db";
import { Fornecedor } from "../../interface/fornecedor/fornecedor-interface";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
import { CreateLog } from "../create-log";
export class UpdateFornecedor {
  async execute(
    idFornecedor: string,
    newFornecedor: Fornecedor
  ): Promise<Response> {
    if (idFornecedor === "") {
      return new ResponseModel(
        false,
        406,
        "Erro ao atualizar fornecedor, id não foi fornecido",
        {}
      );
    }
    const updateFornecedor = await new FornecedorDb().update(
      idFornecedor,
      newFornecedor
    );
    if (!updateFornecedor.status) {
      await new CreateLog().execute(updateFornecedor);
    }
    return updateFornecedor;
  }
}
