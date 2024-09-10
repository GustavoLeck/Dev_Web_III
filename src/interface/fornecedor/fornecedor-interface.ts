export interface Fornecedor {
  id: string;
  cnpj: string;
  nome: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  complemento?: string;
  create_at?: Date;
  update_at?: Date;
}
