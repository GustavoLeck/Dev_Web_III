import { v4 as uuidv4 } from "uuid";

export class ClienteModel {
  id: string;
  cnpj: string;
  nome: string;
  fornecedor_id: string;
  bairro_cob: string;
  bairro_ent: string;
  cep_cob: string;
  cep_ent: string;
  cidade_cob: string;
  cidade_ent: string;
  complemento_cob: string;
  complemento_ent: string;
  estado_cob: string;
  estado_ent: string;
  pais_cob: string;
  pais_ent: string;
  rua_cob: string;
  rua_ent: string;

  constructor(value: any) {
    this.id =
      value?.id == undefined || value?.id == null
        ? uuidv4().replace("-", "").substring(0, 12)
        : value.id;
    this.cnpj =
      value?.cnpj == undefined || value?.cnpj == null ? "" : value?.cnpj;
    this.nome =
      value?.nome == undefined || value?.nome == null ? "" : value?.nome;
    this.fornecedor_id =
      value?.fornecedor_id == undefined || value?.fornecedor_id == null
        ? ""
        : value?.fornecedor_id;
    this.bairro_cob =
      value?.bairro_cob == undefined || value?.bairro_cob == null
        ? ""
        : value?.bairro_cob;
    this.bairro_ent =
      value?.bairro_ent == undefined || value?.bairro_ent == null
        ? ""
        : value?.bairro_ent;
    this.cep_cob =
      value?.cep_cob == undefined || value?.cep_cob == null
        ? ""
        : value?.cep_cob;
    this.cep_ent =
      value?.cep_ent == undefined || value?.cep_ent == null
        ? ""
        : value?.cep_ent;
    this.cidade_cob =
      value?.cidade_cob == undefined || value?.cidade_cob == null
        ? ""
        : value?.cidade_cob;
    this.cidade_ent =
      value?.cidade_ent == undefined || value?.cidade_ent == null
        ? ""
        : value?.cidade_ent;
    this.complemento_cob =
      value?.complemento_cob == undefined || value?.complemento_cob == null
        ? ""
        : value?.complemento_cob;
    this.complemento_ent =
      value?.complemento_ent == undefined || value?.complemento_ent == null
        ? ""
        : value?.complemento_ent;
    this.estado_cob =
      value?.estado_cob == undefined || value?.estado_cob == null
        ? ""
        : value?.estado_cob;
    this.estado_ent =
      value?.estado_ent == undefined || value?.estado_ent == null
        ? ""
        : value?.estado_ent;
    this.pais_cob =
      value?.pais_cob == undefined || value?.pais_cob == null
        ? ""
        : value?.pais_cob;
    this.pais_ent =
      value?.pais_ent == undefined || value?.pais_ent == null
        ? ""
        : value?.pais_ent;
    this.rua_cob =
      value?.rua_cob == undefined || value?.rua_cob == null
        ? ""
        : value?.rua_cob;
    this.rua_ent =
      value?.rua_ent == undefined || value?.rua_ent == null
        ? ""
        : value?.rua_ent;
  }
}
