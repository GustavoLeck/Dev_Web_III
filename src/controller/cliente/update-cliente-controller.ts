import { Request, Response } from "express";
import { ClienteModel } from "../../model/cliente/cliente-model";
import { UpdateCliente } from "../../usecase/cliente/update-cliente";
export class UpdateClienteController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    const newCliente = new ClienteModel(req.body);
    const updateCliente = await new UpdateCliente().execute(
      idCliente,
      newCliente
    );
    return res.status(200).send(updateCliente);
  }
}
