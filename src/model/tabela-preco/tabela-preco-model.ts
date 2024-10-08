export class TabelaPrecoModel {
  id: string;
  nome: string;
  descricao: string;
  constructor(tabelaPreco: any) {
    this.id = tabelaPreco.id;
    this.nome = tabelaPreco.nome;
    this.descricao = tabelaPreco.descricao;
  }
}
