import { APIInterface, InterfaceConteudoDeTabela } from "../interfaces";
import db from "./mock/fakeDB.json";

type ConteudoDeTabela = InterfaceConteudoDeTabela.Tabela;

type FetchFunction = (url: string) => Promise<ConteudoDeTabela>;

export default class BackendAPI implements APIInterface {
  private metodoFetchPadrao = BackendAPI.fetchDeTeste;
  private fetch: FetchFunction;

  constructor(readonly urlBase: string, metodoFetch?: FetchFunction) {
    this.fetch = metodoFetch ? metodoFetch : this.metodoFetchPadrao;
  }

  public async getConteudoDeTabela(): Promise<ConteudoDeTabela> {
    return await this.fetch("tabela");
  }

  public async removerDocentes(ids: string[]): Promise<void> {
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
  private static async fetchDeTeste(url: string): Promise<ConteudoDeTabela> {
    return db[url as keyof object];
  }

  private async fetchDeUrl(url: string): Promise<ConteudoDeTabela> {
    const response = await fetch(`${this.urlBase}/${url}`);
    return await response.json();
  }
}
