import { ProdutoDb } from "../../infrastructure/db/produto-db";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class DeleteProduto {
  async execute(idProduto: string): Promise<Response> {
    const deleteProduto = await new ProdutoDb().delete(idProduto);
    if (!deleteProduto.status) {
      await new CreateLog().execute(deleteProduto);
    }
    return deleteProduto;
  }
}
