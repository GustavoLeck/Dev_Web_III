export class ProdutoModel {
  id: string;
  fornecedor_id: string;
  nome: string;
  descricao: string;
  constructor(produtos: any) {
    this.id = produtos?.id;
    this.fornecedor_id = produtos?.fornecedor_id;
    this.nome = produtos?.nome;
    this.descricao = produtos?.descricao;
  }
}
