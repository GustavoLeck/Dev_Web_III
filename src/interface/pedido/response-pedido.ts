import { Pedido } from "./pedido-interface";

export interface ResponsePedido {
  status: boolean;
  code: number;
  message: string;
  data: Array<Pedido>;
}
