import { FornecedorDb } from "../../infrastructure/db/fornecedor-db";
import { ResponseFornecedor } from "../../interface/fornecedor/reponse-fornecedor-interface";
import { ResponseFornecedorModel } from "../../model/fornecedor/response-fornecedor-model";
import { CreateLog } from "../create-log";

export class ConsultAllFornecedor {
  async execute(): Promise<ResponseFornecedor> {
    const ResponseFornecedor = await new FornecedorDb().getAll();
    if (!ResponseFornecedor.status) {
      await new CreateLog().execute(ResponseFornecedor);
    }
    return new ResponseFornecedorModel(
      ResponseFornecedor.status,
      ResponseFornecedor.code,
      ResponseFornecedor.message,
      ResponseFornecedor.data
    );
  }
}
