/*
import { IApi, ITabela } from "../interfaces";

export default class API implements IApi {
  private url = "http://localhost:4000";

  public async getConteudoDeTabela(): Promise<ITabela.Tabela> {
    return await this.get("tabela");
  }

  public async removerDocentes(ids: string[]): Promise<any> {
    return new Promise(() => {});
  }

  public async adicionarDocente(nome: string): Promise<any> {
    return new Promise(() => {});
  }

  private async get(rota: string): Promise<any> {
    const url = this.construirURL(rota);
    const response = await fetch(url);
    return await response.json();
  }

  private async post(rota: string, body: any): Promise<any> {
    const url = this.construirURL(rota);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }

  private construirURL(rota: string): string {
    return `${this.url}/${rota}`;
  }
}
*/
const foo = 1;
export { foo };
