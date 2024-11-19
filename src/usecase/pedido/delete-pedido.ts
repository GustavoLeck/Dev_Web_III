import { PedidoDb } from "../../infrastructure/db/pedido-db";
import { Response } from "../../interface/response-interface";
import { CreateLog } from "../create-log";

export class DeletePedido {
  async execute(id: string): Promise<Response> {
    const deletePedido = await new PedidoDb().delete(id);
    if (!deletePedido.status) {
      await new CreateLog().execute(deletePedido);
    }
    return deletePedido;
  }
}
