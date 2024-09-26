import { Request, Response } from "express";
import { DeleteProduto } from "../../usecase/produto/delete-produto";
export class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    const idProduto = req?.params?.idProduto;
    const response = await new DeleteProduto().execute(idProduto);
    return res.status(response.code).send(response);
  }
}
