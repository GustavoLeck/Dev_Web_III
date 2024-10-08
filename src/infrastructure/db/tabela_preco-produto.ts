import { prisma } from "../../prisma/prisma";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";
import { tabela_produto } from "../../interface/tabela_produto/tabela_produto";

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
  async create(value: tabela_produto): Promise<Response> {
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

  async updatePreco(value: tabela_produto): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      UPDATE produto SET
          PRECO = ${value.preco}
      WHERE PRODUTO_ID = ${value.produto_id}
      AND TABELA_PRECO_ID = ${value.tabela_preco_id}
  `;
      return new ResponseModel(
        true,
        200,
        "Item da tabela atualizado com sucesso.",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro para atualizar item da tabela de preco",
        error
      );
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
