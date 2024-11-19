import { produto_pedido } from "./produto-pedido-interface";

export interface ResponseProdutoTabela {
  status: boolean;
  code: number;
  message: string;
  data: Array<produto_pedido>;
}
