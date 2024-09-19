import { FornecedorDb } from "../../infrastructure/db/fornecedor-db";
import { Fornecedor } from "../../interface/fornecedor/fornecedor-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";
export class CreateFornecedor {
  async execute(fornecedor: Fornecedor): Promise<Response> {
    const fornecedorResponse = await new FornecedorDb().create(fornecedor);
    if (!fornecedorResponse.status) {
      await new CreateLog().execute(fornecedorResponse);
    }
    return fornecedorResponse;
  }
}
