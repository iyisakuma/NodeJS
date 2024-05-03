import { Carrinho } from "../../domain/Carrinho";
import { Comprador } from "../../domain/Comprador";

export interface CarrinhoRepository {
  merge(c: Carrinho): Carrinho;

  persist(c: Carrinho): Carrinho;

  findById(c: Comprador): Carrinho;
}
