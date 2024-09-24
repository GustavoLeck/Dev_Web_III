import { ProdutoDb } from "../../infrastructure/db/produto-db";
import { ResponseProduto } from "../../interface/produto/response-produto-interface";
import { ResponseProdutoModel } from "../../model/produto/response-produto-model";
import { CreateLog } from "../create-log";

export class ConsultAllProduto {
  async execute(): Promise<ResponseProduto> {
    const response = await new ProdutoDb().getAll();
    if (!response.status) {
      await new CreateLog().execute(response);
    }
    return new ResponseProdutoModel(
      response.status,
      response.code,
      response.message,
      response.data
    );
  }
}
