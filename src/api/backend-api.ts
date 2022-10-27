import { APIInterface, ITabela } from "../interfaces";
import db from "./mock/fakeDB.json";

type FetchFunction = (url: string) => Promise<ITabela.Tabela>;

export default class BackendAPI implements APIInterface {
  private metodoFetchPadrao = BackendAPI.fetchDeTeste;
  private fetch: FetchFunction;

  constructor(readonly urlBase: string, metodoFetch?: FetchFunction) {
    this.fetch = metodoFetch ? metodoFetch : this.metodoFetchPadrao;
  }

  public async getConteudoDeTabela(): Promise<ITabela.Tabela> {
    return this.fetch("tabela");
  }

  public async removerDocentes(ids: string[]): Promise<void> {
    return new Promise(() => {});
  }

  public async adicionarDocente(nome: string): Promise<void> {
    return new Promise(() => {});
  }

  static construirMockAPI(): BackendAPI {
    return new BackendAPI("http://localhost:4000");
  }
  static construirAPI(): BackendAPI {
    return new BackendAPI("http://localhost:3000");
  }

  static construirAPITeste(): BackendAPI {
    return new BackendAPI("", this.fetchDeTeste);
  }
  private static async fetchDeTeste(url: string): Promise<ITabela.Tabela> {
    return db[url as keyof object];
  }

  private async fetchDeUrl(url: string): Promise<ITabela.Tabela> {
    const response = await fetch(`${this.urlBase}/${url}`);
    return await response.json();
  }
}
