export interface Cliente {
  id: string;
  cnpj: string;
  name: string;
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
  create_at: Date;
  update_at: Date;
}
