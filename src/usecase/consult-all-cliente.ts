import { ConsultClienteDb } from "../infrastructure/db/cliente-db";

export class ConsultAllCliente {
  async execute() {
    return await new ConsultClienteDb().getAll();
  }
}
