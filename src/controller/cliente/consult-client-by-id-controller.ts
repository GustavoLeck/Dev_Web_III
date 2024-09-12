import { Request, Response } from "express";
import { ConsultClientById } from "../../usecase/cliente/consult-client-by-id";

export class ConsultClienteByIdController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    const consultClienteById = await new ConsultClientById().execute(idCliente);
    return res.send(consultClienteById);
  }
}
