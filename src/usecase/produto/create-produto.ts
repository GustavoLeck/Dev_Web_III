import { ProdutoDb } from "../../infrastructure/db/produto-db";
import { produto } from "../../interface/produto/produto-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class CreateProduto {
  async execute(value: produto): Promise<Response> {
    const createProduto = await new ProdutoDb().create(value);
    if (!createProduto.status) {
      await new CreateLog().execute(createProduto);
    }
    return createProduto;
  }
}
