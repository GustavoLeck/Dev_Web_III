export class FornecedorModel {
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

  constructor(fornecedor: any) {
    this.id = fornecedor?.id;
    this.cnpj = fornecedor?.cnpj;
    this.nome = fornecedor?.nome;
    this.cep = fornecedor?.cep;
    this.rua = fornecedor?.rua;
    this.bairro = fornecedor?.bairro;
    this.cidade = fornecedor?.cidade;
    this.estado = fornecedor?.estado;
    this.pais = fornecedor?.pais;
    this.complemento = fornecedor?.complemento;
  }
}
