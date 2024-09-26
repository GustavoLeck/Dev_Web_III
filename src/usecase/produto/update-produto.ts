import { ProdutoDb } from "../../infrastructure/db/produto-db";
import { produto } from "../../interface/produto/produto-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class UpdateProduto {
  async execute(idProduto: string, value: produto): Promise<Response> {
    const updateProduto = await new ProdutoDb().update(idProduto, value);
    if (!updateProduto.status) {
      await new CreateLog().execute(updateProduto);
    }
    return updateProduto;
  }
}
