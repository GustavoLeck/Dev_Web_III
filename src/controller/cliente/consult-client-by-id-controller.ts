import { Request, Response } from "express";
import { ConsultClientById } from "../../usecase/cliente/consult-client-by-id";

export class ConsultClienteByIdController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    if (!idCliente) {
      return res.status(400).send({
        status: false,
        code: 400,
        message: "idCliente nao informado",
        data: [],
      });
    }
    const consultClienteById = await new ConsultClientById().execute(idCliente);
    if (!consultClienteById.status) {
      consultClienteById.data = [];
      return res
        .status(consultClienteById.code)
        .send(consultClienteById.message);
    }
    return res.status(consultClienteById.code).send(consultClienteById);
  }
}
