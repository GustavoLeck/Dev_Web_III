import { Pedido } from "../../interface/pedido/pedido-interface";
import { PedidoModel } from "./pedido-model";
export class ResponsePedidoModel {
  status: boolean;
  code: number;
  message: string;
  data: Array<Pedido>;
  constructor(
    status: boolean,
    code: number,
    message: string,
    data: Array<Pedido>
  ) {
    this.status = status == undefined || status == null ? false : true;
    this.code = code == undefined || code == null ? 500 : code;
    this.message = message == undefined || message == null ? "" : message;
    this.data =
      data == undefined || data == null ? [] : this.formatPedido(data);
  }
  formatPedido(pedidos: any): Array<Pedido> {
    const listPedidos = Array<Pedido>();
    if (pedidos != null && pedidos != undefined && pedidos.length > 0) {
      for (const cli of pedidos) {
        const pedidoFormated = new PedidoModel(cli);
        listPedidos.push(pedidoFormated);
      }
      return listPedidos;
    }
    pedidos["id"] = "";
    const pedidoFormated = new PedidoModel(pedidos);
    listPedidos.push(pedidoFormated);
    return listPedidos;
  }
}
