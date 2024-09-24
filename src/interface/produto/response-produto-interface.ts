import { produto } from "./produto-interface";

export interface ResponseProduto {
  status: boolean;
  code: number;
  message: string;
  data: Array<produto>;
}
