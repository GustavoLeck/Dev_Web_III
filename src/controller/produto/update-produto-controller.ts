import { Request, Response } from "express";
import { ProdutoModel } from "../../model/produto/produto-model";
import { UpdateProduto } from "../../usecase/produto/update-produto";

export class UpdateProdutoController {
  async handle(req: Request, res: Response) {
    const idProduto = req?.params?.idProduto;
    const value = req.body;
    const produtoFormated = new ProdutoModel(value);
    const response = await new UpdateProduto().execute(
      idProduto,
      produtoFormated
    );
    return res.status(response.code).send(response);
  }
}
