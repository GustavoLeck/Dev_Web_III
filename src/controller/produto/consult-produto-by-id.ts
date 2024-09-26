import { Request, Response } from "express";
import { ConsultProdutoById } from "../../usecase/produto/consult-produto-by-id";

export class ConsultProdutoByIdController {
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
    const consultProdutoById = await new ConsultProdutoById().execute(
      idProduto
    );
    if (!consultProdutoById.status) {
      consultProdutoById.data = [];
    }
    return res.status(consultProdutoById.code).send(consultProdutoById);
  }
}
