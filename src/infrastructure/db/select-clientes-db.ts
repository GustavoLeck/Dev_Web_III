import { prisma } from "../../Prisma/prisma";

export class ConsultClienteDb {
  async getAll() {
    const response = await prisma.$queryRaw`
   SELECT * FROM CLIENTE
  `;

    return response;
  }
}
