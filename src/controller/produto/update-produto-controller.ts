import { Request, Response } from "express";
import { ProdutoModel } from "../../model/produto/produto-model";
import { UpdateProduto } from "../../usecase/produto/update-produto";

export class UpdateProdutoController {
  async handle(req: Request, res: Response) {
    const idProduto = req?.params?.idProduto;

    if (!idProduto) {
      return res.status(400).send({
        status: false,
        code: 400,
        message: "idProduto nao informado",
        data: [],
      });
    }
    const value = req.body;
    const produtoFormated = new ProdutoModel(value);
    const response = await new UpdateProduto().execute(
      idProduto,
      produtoFormated
    );
    return res.status(response.code).send(response);
  }
}
