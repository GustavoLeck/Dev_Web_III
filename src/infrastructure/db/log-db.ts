import { prisma } from "../../prisma/prisma";
import { ResponseModel } from "../../model/response-model";
import { Response } from "../../interface/response-interface";
import { Log } from "../../interface/log-interface";

export class LogDb {
  async getAll(): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
        SELECT * FROM produto
    `;
      return new ResponseModel(
        true,
        200,
        "Logs consultados com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar logs", []);
    }
  }

  async create(value: Log): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
              INSERT INTO produto (
                  MENSSAGEM
              ) VALUES (
                  ${value}
              )
          `;
      return new ResponseModel(true, 200, "Log criado com sucesso", response);
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao criar log", []);
    }
  }
}
