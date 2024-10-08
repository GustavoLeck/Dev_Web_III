import { ProdutoDb } from "../../infrastructure/db/produto-db";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
import { CreateLog } from "../create-log";

export class DeleteProduto {
  async execute(idProduto: string): Promise<Response> {
    if (!idProduto) {
      return new ResponseModel(
        false,
        400,
        "Erro ao deletar produto, ID do produto não encontrado",
        []
      );
    }

    const deleteProduto = await new ProdutoDb().delete(idProduto);
    if (!deleteProduto.status) {
      await new CreateLog().execute(deleteProduto);
    }
    return deleteProduto;
  }
}
