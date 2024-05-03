import { ItemCarrinho } from "./ItemCarrinho";
import { Comprador } from "./Comprador";

export class Carrinho {
  private id: string;
  private comprador: Comprador;
  private itensCarrinho: ItemCarrinho[] = [];

  constructor(comprador: Comprador) {
    this.comprador = comprador;
    this.id = "";
  }

  public addItemCarrinho(itemCarrinho: ItemCarrinho): void {
    this.itensCarrinho.push(itemCarrinho);
  }

  public getItensCarrinho(): ItemCarrinho[] {
    return this.itensCarrinho;
  }

  public getComprador(): Comprador {
    return this.comprador;
  }
}
