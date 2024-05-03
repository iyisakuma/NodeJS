export class Comprador {
  private nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }
}
