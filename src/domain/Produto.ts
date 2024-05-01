export class Produto {
  private descricao: string = "";
  private preco: number = 0;

  constructor(descricao: string, preco: number) {
    this.descricao = descricao;
    this.preco = preco;
  }
  public getPreco(): number {
    return this.preco;
  }
  public getDescricao(): string {
    return this.descricao;
  }
}
