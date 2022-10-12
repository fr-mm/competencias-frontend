import { APIInterface, InterfaceConteudoDeTabela } from "../../interfaces";

export default class MockAPI implements APIInterface {
  private urlBase = "http://localhost:4000";

  public async getConteudoDeTabela(): Promise<InterfaceConteudoDeTabela.Tabela> {
    return await this.fetch("tabela");
  }

  public async removerDocentes(ids: string[]): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  private async fetch(rota: string): Promise<any> {
    const response = await fetch(`${this.urlBase}/${rota}`);
    return await response.json();
  }
}
