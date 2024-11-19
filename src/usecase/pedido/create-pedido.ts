import { PedidoDb } from "../../infrastructure/db/pedido-db";
import { Pedido } from "../../interface/pedido/pedido-interface";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class CreatePedido {
  async execute(pedido: Pedido): Promise<Response> {
    const createPedido = await new PedidoDb().create(pedido);
    if (!createPedido.status) {
      await new CreateLog().execute(createPedido);
    }
    return createPedido;
  }
}
