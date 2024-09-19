import { Request, Response } from "express";
import { DeleteFornecedor } from "../../usecase/fornecedor/delete-fornecedor";
export class DeleteFornecedorController {
  async handle(req: Request, res: Response) {
    const fornecedorId =
      req?.params?.fornecedorId == undefined
        ? ""
        : req.params.fornecedorId.toString();
    const deleteFornecedor = await new DeleteFornecedor().execute(fornecedorId);
    return res.send(deleteFornecedor);
  }
}
