import { prisma } from "../../prisma/prisma";
import { tabela_preco } from "../../interface/tabela_preco/tabela_preco-interface";

export class TabelaPrecoDb {
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

  async create(value: tabela_preco) {
    const response = await prisma.$queryRaw`
            INSERT INTO produto (
                NOME,
                DESCRICAO 
            ) VALUES (
                ${value.nome},
                ${value.fornecedor_id},
            )
        `;
    return response;
  }

  async update(id: string, data: tabela_preco) {
    const response = await prisma.$queryRaw`
            UPDATE produto SET
                NOME = ${data.nome},
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
