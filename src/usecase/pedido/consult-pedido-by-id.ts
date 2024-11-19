import { PedidoDb } from "../../infrastructure/db/pedido-db";
import { ResponsePedido } from "../../interface/pedido/response-pedido";
import { ResponsePedidoModel } from "../../model/pedido/reponse-pedido-model";
import { CreateLog } from "../create-log";

export class ConsultPedidoById {
  async execute(id: string): Promise<ResponsePedido> {
    const responsePedido = await new PedidoDb().getById(id);
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
