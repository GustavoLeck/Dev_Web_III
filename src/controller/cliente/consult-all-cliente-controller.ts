import { Request, Response } from "express";
import { ConsultAllCliente } from "../../usecase/consult-all-cliente";

export class ConsultAllClienteController {
  async handle(req: Request, res: Response) {
    const consultCliente = await new ConsultAllCliente().execute();
    return res.send(consultCliente);
  }
}
