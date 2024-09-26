import { Request, Response } from "express";
import { CreateProduto } from "../../usecase/produto/create-produto";
import { ProdutoModel } from "../../model/produto/produto-model";

export class CreateProdutoController {
  async handle(req: Request, res: Response) {
    const value = req.body;
    const produtoFormated = new ProdutoModel(value);
    const response = await new CreateProduto().execute(produtoFormated);
    return res.status(response.code).send(response);
  }
}
