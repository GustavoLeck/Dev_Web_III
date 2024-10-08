import { Request, Response } from "express";
import { CreateFornecedor } from "../../usecase/fornecedor/create-fornecedor";
import { FornecedorModel } from "../../model/fornecedor/fornecedor-model";

export class CreateFornecedorController {
  async handle(req: Request, res: Response) {
    const fornecedorFormated = new FornecedorModel(req.body);
    const fornecedorClient = await new CreateFornecedor().execute(
      fornecedorFormated
    );
    return res.status(fornecedorClient.code).send(fornecedorClient);
  }
}
