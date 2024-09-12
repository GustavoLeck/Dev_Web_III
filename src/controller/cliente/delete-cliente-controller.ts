import { Request, Response } from "express";
import { DeleteCliente } from "../../usecase/cliente/delete-cliente";
export class DeleteClienteController {
  async handle(req: Request, res: Response) {
    const idCliente =
      req?.params?.idCliente == undefined
        ? ""
        : req.params.idCliente.toString();
    const deleteCliente = await new DeleteCliente().execute(idCliente);
    return res.send(deleteCliente);
  }
}
