import { prisma } from "../../prisma/prisma";
import { produto } from "../../interface/produto/produto-interface";
import { ResponseModel } from "../../model/response-model";
import { Response } from "../../interface/response-interface";

export class ProdutoDb {
  async getAll() {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM produto
  `;
      return new ResponseModel(
        true,
        200,
        "Produtos consultados com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar produtos", []);
    }
  }

  async getById(id: string) {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM produto WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Produto consultado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar produto", error);
    }
  }

  async create(value: produto): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      INSERT INTO produto (
          NOME,
          FORNECEDOR_ID, 
          DESCRICAO 
      ) VALUES (
          ${value.nome},
          ${value.fornecedor_id},
          ${value.descricao},
      )
  `;
      return new ResponseModel(
        true,
        200,
        "Produto criado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao criar produto", error);
    }
  }

  async update(id: string, data: produto): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      UPDATE produto SET
          NOME = ${data.nome},
          FORNECEDOR_ID = ${data.fornecedor_id},
          DESCRICAO = ${data.descricao},
      WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Produto atualizado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao atualizar produto", error);
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
        "Produto deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao deletar produto", error);
    }
  }
}
