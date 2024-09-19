import { Fornecedor } from "./fornecedor-interface";

export interface ResponseFornecedor {
  status: boolean;
  code: number;
  message: string;
  data: Array<Fornecedor>;
}
