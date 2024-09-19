import { prisma } from "../../prisma/prisma";
import { Fornecedor } from "../../interface/fornecedor/fornecedor-interface";
import { ResponseModel } from "../../model/response-model";
import { Response } from "../../interface/response-interface";

export class FornecedorDb {
  async getAll(): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM fornecedor
  `;
      return new ResponseModel(
        true,
        200,
        "Fornecedores consultados com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(true, 500, "Erro ao buscar fornecedores", error);
    }
  }

  async getById(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM fornecedor WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Fornecedor consultado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(true, 500, "Erro ao buscar fornecedor", error);
    }
  }

  async create(value: Fornecedor): Promise<Response> {
    try {
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
      return new ResponseModel(
        true,
        200,
        "Fornecedor criado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(true, 500, "Erro ao criar fornecedor", error);
    }
  }

  async update(id: string, data: Fornecedor): Promise<Response> {
    try {
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
      return new ResponseModel(
        true,
        200,
        "Fornecedor atualizado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(
        true,
        500,
        "Erro ao atualizar fornecedor",
        error
      );
    }
  }

  async delete(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      DELETE FROM fornecedor WHERE ID = ${id}
  `;
      return new ResponseModel(
        true,
        200,
        "Fornecedor deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(true, 500, "Erro ao deletar fornecedor", error);
    }
  }
}
