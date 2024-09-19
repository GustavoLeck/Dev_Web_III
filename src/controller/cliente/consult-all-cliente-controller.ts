import { Request, Response } from "express";
import { ConsultAllCliente } from "../../usecase/cliente/consult-all-cliente";

export class ConsultAllClienteController {
  async handle(req: Request, res: Response) {
    const consultCliente = await new ConsultAllCliente().execute();
    if (!consultCliente.status) {
      consultCliente.data = [];
      return res.status(consultCliente.code).send(consultCliente.message);
    }
    return res.status(consultCliente.code).send(consultCliente);
  }
}
