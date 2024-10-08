import { Request, Response } from "express";
import { UpdateFornecedor } from "../../usecase/fornecedor/update-fornecedor";
import { FornecedorModel } from "../../model/fornecedor/fornecedor-model";
export class UpdateClienteController {
  async handle(req: Request, res: Response) {
    const idFornecedor =
      req?.params?.idFornecedor == undefined
        ? ""
        : req.params.idFornecedor.toString();

    if (!idFornecedor) {
      return res.status(400).send({
        status: false,
        code: 400,
        message: "idFornecedor nao informado",
        data: [],
      });
    }
    const newFornecedor = new FornecedorModel(req.body);
    const updateFornecedor = await new UpdateFornecedor().execute(
      idFornecedor,
      newFornecedor
    );
    return res.status(200).send(updateFornecedor);
  }
}
