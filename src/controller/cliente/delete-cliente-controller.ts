import { Request, Response } from "express";
import { DeleteCliente } from "../../usecase/cliente/delete-cliente";
export class DeleteClienteController {
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
    const deleteCliente = await new DeleteCliente().execute(idCliente);
    return res.send(deleteCliente);
  }
}
