import { Request, Response } from "express";
import { ConsultAllProduto } from "../../usecase/produto/consult-all-produto";

export class ConsultAllProdutoController {
  async handle(req: Request, res: Response) {
    const consultAllProduto = await new ConsultAllProduto().execute();
    if (!consultAllProduto.status) {
      consultAllProduto.data = [];
    }
    return res.status(consultAllProduto.code).send(consultAllProduto);
  }
}
