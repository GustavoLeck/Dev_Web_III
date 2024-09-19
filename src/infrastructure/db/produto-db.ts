import { prisma } from "../../prisma/prisma";
import { produto } from "../../interface/produto/produto-interface";

export class ProdutoDb {
  async getAll() {
    const response = await prisma.$queryRaw`
            SELECT * FROM produto
        `;
    return response;
  }

  async getById(id: string) {
    const response = await prisma.$queryRaw`
            SELECT * FROM produto WHERE ID = ${id}
        `;
    return response;
  }

  async create(value: produto) {
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
    return response;
  }

  async update(id: string, data: produto) {
    const response = await prisma.$queryRaw`
            UPDATE produto SET
                NOME = ${data.nome},
                FORNECEDOR_ID = ${data.fornecedor_id},
                DESCRICAO = ${data.descricao},
            WHERE ID = ${id}
        `;
    return response;
  }

  async delete(id: string) {
    const response = await prisma.$queryRaw`
            DELETE FROM produto WHERE ID = ${id}
        `;
    return response;
  }
}
