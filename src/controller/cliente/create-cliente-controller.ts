import { Request, Response } from "express";
import { CreateCliente } from "../../usecase/cliente/create-cliente";
import { ClienteModel } from "../../model/cliente/cliente-model";

export class CreateClienteController {
  async handle(req: Request, res: Response) {
    const clienteFormated = new ClienteModel(req.body);
    const createClient = await new CreateCliente().execute(clienteFormated);
    return res.status(createClient.code).send(createClient);
  }
}
