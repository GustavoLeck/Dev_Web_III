import { Request, Response } from "express";
import { ConsultAllFornecedor } from "../../usecase/fornecedor/consult-all-fornecedor";

export class ConsultAllFornecedorController {
  async handle(req: Request, res: Response) {
    const consultAllFornecedor = await new ConsultAllFornecedor().execute();
    if (!consultAllFornecedor.status) {
      consultAllFornecedor.data = [];
      return res
        .status(consultAllFornecedor.code)
        .send(consultAllFornecedor.message);
    }
    return res.status(consultAllFornecedor.code).send(consultAllFornecedor);
  }
}
