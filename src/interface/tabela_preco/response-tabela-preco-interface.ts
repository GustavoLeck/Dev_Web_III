import { tabela_preco } from "./tabela_preco-interface";

export interface ResponseProduto {
  status: boolean;
  code: number;
  message: string;
  data: Array<tabela_preco>;
}
