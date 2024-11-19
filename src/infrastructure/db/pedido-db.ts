import { Pedido } from "../../interface/pedido/pedido-interface";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
import { prisma } from "../../prisma/prisma";

export class PedidoDb {
  async getAll(): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
            SELECT * FROM PEDIDO
        `;
      return new ResponseModel(
        true,
        200,
        "Pedidos consultados com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar pedidos", []);
    }
  }

  async getById(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
    SELECT * FROM PEDIDO WHERE ID = ${id}
   `;
      const arrayLength = (response as unknown[]).length;
      if (arrayLength === 0) {
        throw new Error("Nenhum pedido encontrado");
      }
      return new ResponseModel(
        true,
        200,
        "Pedido consultado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar pedido", error);
    }
  }
  async create(value: Pedido): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
        INSERT INTO CLIENTE (
          CLIENTE_ID, 
          DESCONTO,
          FRETE, 
          DESCRICAO, 
        ) VALUES (
          ${value.cliente_id},
          ${value.desconto},
          ${value.frete},
          ${value.descricao},
        )
      `;
      return new ResponseModel(
        true,
        200,
        "Pedido criado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao criar pedido", error);
    }
  }

  async update(value: Pedido): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
        UPDATE PEDIDO SET 
          CLIENTE_ID = ${value.cliente_id},
          DESCONTO = ${value.desconto},
          FRETE = ${value.frete},
          DESCRICAO = ${value.descricao}
        WHERE ID = ${value.id}
      `;
      return new ResponseModel(
        true,
        200,
        "Pedido atualizado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao atualizar pedido", error);
    }
  }

  async delete(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
        DELETE FROM PEDIDO WHERE ID = ${id}
      `;
      return new ResponseModel(
        true,
        200,
        "Pedido deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao deletar pedido", error);
    }
  }
}
