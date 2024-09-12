import { Cliente } from "./cliente-interface";

export interface ResponseCliente {
  status: boolean;
  code: number;
  message: string;
  data: Array<Cliente>;
}
