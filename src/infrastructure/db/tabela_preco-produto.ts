import { prisma } from "../../prisma/prisma";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";

export class TabelaPrecoProdutoDb {
  async getAll(): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM produto
  `;
      return new ResponseModel(
        true,
        200,
        "Tabelas de preço consultadas com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao consultar tabelas de preço",
        error
      );
    }
  }
  async create(value: any): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      INSERT INTO produto (
          PRODUTO_ID,
          TABELA_PRECO_ID,
          PRECO 
      ) VALUES (
          ${value.produto_id},
          ${value.tabela_preco_id},
          ${value.preco},
      )
  `;
      return new ResponseModel(
        true,
        200,
        "Item criado na tabela com sucesso.",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao criar item na tabela",
        error
      );
    }
  }

  async updatePreco(
    idProduto: string,
    idTabela: string,
    preco: number
  ): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      UPDATE produto SET
          PRECO = ${preco}
      WHERE PRODUTO_ID = ${idProduto}
      AND TABELA_PRECO_ID = ${idTabela}
  `;
      return new ResponseModel(
        true,
        200,
        "Item da tabela atualizado com sucesso.",
        response
      );
    } catch (error) {
      return error;
    }
  }

  async delete(data: any): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      WHERE PRODUTO_ID = ${data.produto_id}
      AND TABELA_PRECO_ID = ${data.tabela_preco_id}
  `;
      return new ResponseModel(
        true,
        200,
        "Item da tabela excluido com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao excluir item da tabela",
        error
      );
    }
  }
}
