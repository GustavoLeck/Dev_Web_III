import { PedidoDb } from "../../infrastructure/db/pedido-db";
import { ResponsePedido } from "../../interface/pedido/response-pedido";
import { ResponsePedidoModel } from "../../model/pedido/reponse-pedido-model";
import { CreateLog } from "../create-log";

export class ConsultAllPedido {
  async execute(): Promise<ResponsePedido> {
    const responsePedido = await new PedidoDb().getAll();
    if (!responsePedido.status) {
      await new CreateLog().execute(responsePedido);
    }
    return new ResponsePedidoModel(
      responsePedido.status,
      responsePedido.code,
      responsePedido.message,
      responsePedido.data
    );
  }
}
