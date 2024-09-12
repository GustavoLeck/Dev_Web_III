import { prisma } from "../../prisma/prisma";
import { Cliente } from "../../interface/cliente/cliente-interface";
import { Response } from "../../interface/response-interface";
import { ResponseModel } from "../../model/response-model";

export class ClienteDb {
  async getAll(): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      SELECT * FROM CLIENTE
    `;
      return new ResponseModel(
        true,
        200,
        "Clientes consultados com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar clientes", []);
    }
  }
  async getById(id: string): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
    SELECT * FROM CLIENTE WHERE ID = ${id}
   `;
      return new ResponseModel(
        true,
        200,
        "Cliente consultado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao consultar cliente", error);
    }
  }

  async create(value: Cliente): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
        INSERT INTO CLIENTE (
          CNPJ, 
          NOME,
          FORNECEDOR_ID, 
          BAIRRO_COB, 
          BAIRRO_ENT, 
          CEP_COB, 
          CEP_ENT,
          CIDADE_COB,
          CIDADE_ENT,
          COMPLEMENTO_COB,
          COMPLEMENTO_ENT,
          ESTADO_COB,
          ESTADO_ENT,
          PAIS_COB,
          PAIS_ENT,
          RUA_COB,
          RUA_ENT
           ) VALUES (
            ${value.cnpj},
            ${value.nome},
            ${value.fornecedor_id},
            ${value.bairro_cob},
            ${value.bairro_ent},
            ${value.cep_cob},
            ${value.cep_ent},
            ${value.cidade_cob},
            ${value.cidade_ent},
            ${value.complemento_cob},
            ${value.complemento_ent},
            ${value.estado_cob},
            ${value.estado_ent},
            ${value.pais_cob},
            ${value.pais_ent},
            ${value.rua_cob},
            ${value.rua_ent}
           )
      `;
      return new ResponseModel(
        true,
        200,
        "Cliente criado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao criar cliente", error);
    }
  }

  async update(idCliente: string, data: Cliente): Promise<Response> {
    try {
      const response = await prisma.$queryRaw`
      UPDATE CLIENTE SET
        CNPJ = ${data.cnpj},
        NOME = ${data.nome},
        FORNECEDOR_ID = ${data.fornecedor_id},
        BAIRRO_COB = ${data.bairro_cob},
        BAIRRO_ENT = ${data.bairro_ent},
        CEP_COB = ${data.cep_cob},
        CEP_ENT = ${data.cep_ent},
        CIDADE_COB = ${data.cidade_cob},
        CIDADE_ENT = ${data.cidade_ent},
        COMPLEMENTO_COB = ${data.complemento_cob},
        COMPLEMENTO_ENT = ${data.complemento_ent},
        ESTADO_COB = ${data.estado_cob},
        ESTADO_ENT = ${data.estado_ent},
        PAIS_COB = ${data.pais_cob},
        PAIS_ENT = ${data.pais_ent},
        RUA_COB = ${data.rua_cob},
        RUA_ENT = ${data.rua_ent}
      WHERE ID = ${idCliente}
      `;
      return new ResponseModel(
        true,
        200,
        "Cliente atualizado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao atualizar cliente", error);
    }
  }

  async delete(id: string) {
    try {
      const response = await prisma.$queryRaw`
      DELETE FROM CLIENTE WHERE ID = ${id}
    `;
      return new ResponseModel(
        true,
        200,
        "Cliente deletado com sucesso",
        response
      );
    } catch (error) {
      return new ResponseModel(false, 400, "Erro ao deletar cliente", error);
    }
  }
}
