import { Request, Response } from "express";
import { UpdateFornecedor } from "../../usecase/fornecedor/update-fornecedor";
import { FornecedorModel } from "../../model/fornecedor/fornecedor-model";
export class UpdateClienteController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    const newFornecedor = new FornecedorModel(req.body);
    const updateCliente = await new UpdateFornecedor().execute(
      idCliente,
      newFornecedor
    );
    return res.status(200).send(updateCliente);
  }
}
