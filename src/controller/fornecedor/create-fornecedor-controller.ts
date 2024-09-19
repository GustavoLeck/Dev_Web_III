import { Request, Response } from "express";
import { CreateFornecedor } from "../../usecase/fornecedor/create-fornecedor";
import { FornecedorModel } from "../../model/fornecedor/fornecedor-model";

export class CreateClienteController {
  async handle(req: Request, res: Response) {
    const clienteFormated = new FornecedorModel(req.body);
    const createClient = await new CreateFornecedor().execute(clienteFormated);
    return res.status(createClient.code).send(createClient);
  }
}
