import { Request, Response } from "express";
import { CreateCliente } from "../../usecase/create-cliente";

export class CreateClienteController {
  async handle(req: Request, res: Response) {
    const createClient = await new CreateCliente().execute(req.body);
    return res.status(200).send(createClient);
  }
}
