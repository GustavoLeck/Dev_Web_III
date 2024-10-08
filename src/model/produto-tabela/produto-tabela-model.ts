export class ProdutoTabelaModel {
  id: string;
  produto_id: string;
  tabela_preco_id: string;
  preco: number;
  constructor(value: any) {
    this.id = value?.id;
    this.produto_id = value?.idProduto;
    this.tabela_preco_id = value?.idTabela;
    this.preco = value?.preco;
  }
}
