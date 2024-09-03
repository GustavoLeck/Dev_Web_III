import { ConsultClienteDb } from "../infrastructure/db/select-clientes-db";

export class ConsultAllCliente {
  async execute() {
    return await new ConsultClienteDb().getAll();
  }
}
