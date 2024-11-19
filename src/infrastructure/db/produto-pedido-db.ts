import { prisma } from "../../prisma/prisma";
import { produto_pedido } from "../../interface/produto-pedido/produto-pedido-interface";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";

export class ProdutoPedidoDb {
  async create(value: produto_pedido): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
            INSERT INTO PRODUTO_PEDIDO (
              PRODUTO_ID, 
              PEDIDO_ID,
            ) VALUES (
              ${value.produto_id},
              ${value.pedido_id},
            )
          `;
      return new ResponseModel(
        true,
        200,
        "Produto Pedido criado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao criar Produto Pedido",
        error
      );
    }
  }
  async delete(value: produto_pedido): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
            DELETE FROM PRODUTO_PEDIDO WHERE PRODUTO_ID = ${value.produto_id} AND PEDIDO_ID = ${value.pedido_id}
          `;
      return new ResponseModel(
        true,
        200,
        "Produto Pedido deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao deletar Produto Pedido",
        error
      );
    }
  }
  async deleteByPedidoId(value: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
            DELETE FROM PRODUTO_PEDIDO WHERE PEDIDO_ID = ${value}
          `;
      return new ResponseModel(
        true,
        200,
        "Produto Pedido deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao deletar Produto Pedido",
        error
      );
    }
  }
}
