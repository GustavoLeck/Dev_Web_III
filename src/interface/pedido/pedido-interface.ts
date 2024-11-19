export interface Pedido {
  id?: string;
  cliente_id: string;
  desconto: number;
  frete: number;
  descricao: string;
  create_at?: Date;
  update_at?: Date;
}
