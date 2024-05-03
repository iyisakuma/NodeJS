import fs from "fs";
import { CarrinhoRepository } from "../interface/CarrinhoRepository";
import { Carrinho } from "../../domain/Carrinho";
import { Comprador } from "../../domain/Comprador";

export class CarrinhoFiles implements CarrinhoRepository {
  public merge(c: Carrinho): Carrinho {
    
}
  public persist(c: Carrinho): Carrinho {
    throw new Error("Method not implemented.");
  }
  public findById(c: Comprador): Carrinho {
    throw new Error("Method not implemented.");
  }
}
