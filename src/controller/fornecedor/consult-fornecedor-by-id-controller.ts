import { Request, Response } from "express";
import { ConsultFornecedorById } from "../../usecase/fornecedor/consult-fornecedor-by-id";

export class ConsultFornecedorByIdController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    const consultFornecedorById = await new ConsultFornecedorById().execute(
      idCliente
    );
    if (!consultFornecedorById.status) {
      consultFornecedorById.data = [];
      return res
        .status(consultFornecedorById.code)
        .send(consultFornecedorById.message);
    }
    return res.status(consultFornecedorById.code).send(consultFornecedorById);
  }
}
