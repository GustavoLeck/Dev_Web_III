import { prisma } from "../../prisma/prisma";
import { tabela_preco } from "../../interface/tabela_preco/tabela_preco-interface";
import { ResponseModel } from "../../model/response-model";
import { Response } from "../../interface/response-interface";
export class TabelaPrecoDb {
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

  async getById(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM produto WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Tabela de preço consultada com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao consultar tabela de preço",
        error
      );
    }
  }

  async create(value: tabela_preco): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      INSERT INTO produto (
          NOME,
          DESCRICAO 
      ) VALUES (
          ${value.nome},
          ${value.fornecedor_id},
      )
  `;
      return new ResponseModel(
        true,
        200,
        "Tabela de preço criada com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao criar tabela de preço",
        error
      );
    }
  }

  async update(id: string, data: tabela_preco): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      UPDATE produto SET
          NOME = ${data.nome},
          DESCRICAO = ${data.descricao},
      WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Tabela de preço atualizada com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao atualizar tabela de preço",
        error
      );
    }
  }

  async delete(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      DELETE FROM produto WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Tabela de preço atualizada com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        false,
        400,
        "Erro ao excluir tabela de preço",
        error
      );
    }
  }
}
