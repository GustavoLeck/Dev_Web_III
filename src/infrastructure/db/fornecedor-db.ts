import { prisma } from "../../prisma/prisma";
import { Fornecedor } from "../../interface/fornecedor/fornecedor-interface";

export class FornecedorDb {
  async getAll() {
    const response = await prisma.$queryRaw`
            SELECT * FROM fornecedor
        `;
    return response;
  }

  async getById(id: string) {
    const response = await prisma.$queryRaw`
            SELECT * FROM fornecedor WHERE ID = ${id}
        `;
    return response;
  }

  async create(value: Fornecedor) {
    const response = await prisma.$queryRaw`
            INSERT INTO fornecedor (
                CNPJ, 
                NOME,
                CEP, 
                RUA, 
                BAIRRO, 
                CIDADE,
                ESTADO,
                PAIS,
                COMPLEMENTO,
            ) VALUES (
                ${value.cnpj},
                ${value.nome},
                ${value.cep},
                ${value.rua},
                ${value.bairro},
                ${value.cidade},
                ${value.estado},
                ${value.pais},
                ${value.complemento},
            )
        `;
    return response;
  }

  async update(id: string, data: Fornecedor) {
    const response = await prisma.$queryRaw`
            UPDATE fornecedor SET
                CNPJ = ${data.cnpj},
                NOME = ${data.nome},
                CEP = ${data.cep},
                RUA = ${data.rua},
                BAIRRO = ${data.bairro},
                CIDADE = ${data.cidade},
                ESTADO = ${data.estado},
                PAIS = ${data.pais},
            WHERE ID = ${id}
        `;
    return response;
  }

  async delete(id: string) {
    const response = await prisma.$queryRaw`
            DELETE FROM fornecedor WHERE ID = ${id}
        `;
    return response;
  }
}
