import { Request, Response } from "express";
import { ConsultFornecedorById } from "../../usecase/fornecedor/consult-fornecedor-by-id";

export class ConsultFornecedorByIdController {
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
    const consultFornecedorById = await new ConsultFornecedorById().execute(
      idFornecedor
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
