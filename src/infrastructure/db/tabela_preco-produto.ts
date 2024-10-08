import { prisma } from "../../prisma/prisma";
import { tabela_produto } from "../../interface/tabela_produto/tabela_produto";

export class TabelPrecoProdutoDb {
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

  async create(value: any) {
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
    return response;
  }

  async updatePreco(id: string, data: tabela_produto) {
    const response = await prisma.$queryRaw`
            UPDATE produto SET
                PRECO = ${data.preco}
        `;
    return response;
  }

  async delete(data: any) {
    const response = await prisma.$queryRaw`
            WHERE PRODUTO_ID = ${data.produto_id}
            AND TABELA_PRECO_ID = ${data.tabela_preco_id}
        `;
    return response;
  }
}
