import { Produto } from "./Produto";

export class ItemCarrinho {
  private produto: Produto;
  private quantidade: number = 0;

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public aumentaQuantidade(): void {
    this.quantidade++;
  }

  public diminuiQuantifade(): void {
    this.quantidade--;
  }
}
