import { tabela_produto } from "./tabela_produto";

export interface ResponseProdutoTabela {
  status: boolean;
  code: number;
  message: string;
  data: Array<tabela_produto>;
}
