export class PedidoModel {
  cliente_id: string;
  desconto: number;
  frete: number;
  descricao: string;
  constructor(value: any) {
    this.cliente_id = value.cliente_id;
    this.desconto = value.desconto;
    this.frete = value.frete;
    this.descricao = value.descricao;
  }
}
