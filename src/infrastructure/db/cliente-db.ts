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

      const arrayLength = (response as unknown[]).length;
      if (arrayLength === 0) {
        throw new Error("Nenhum cliente encontrado");
      }
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
      const arrayLength = (response as unknown[]).length;
      if (arrayLength === 0) {
        throw new Error("Nenhum cliente encontrado");
      }
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
      const response = await prisma.cliente.create({ data: value });
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
      const response = await prisma.cliente.update({
        data: {
          cnpj: data.cnpj,
          nome: data.nome,
          // fornecedor_id: "",
          bairro_cob: data.bairro_cob,
          bairro_ent: data.bairro_ent,
          cep_cob: data.cep_cob,
          cep_ent: data.cep_ent,
          cidade_cob: data.cidade_cob,
          cidade_ent: data.cidade_ent,
          complemento_cob: data.complemento_cob,
          complemento_ent: data.complemento_ent,
          estado_cob: data.estado_cob,
          estado_ent: data.estado_ent,
          pais_cob: data.pais_cob,
          pais_ent: data.pais_ent,
          rua_cob: data.rua_cob,
          rua_ent: data.rua_ent,
        },
        where: { id: idCliente },
      });

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
