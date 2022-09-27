import { Docente } from "../otds";
import db from "./mock/fakeDB.json";

type FetchFunction = (url: string) => Promise<object[]>;

export default class BackendAPI {
  private fetch: FetchFunction;

  constructor(readonly urlBase: string, metodoFetch?: FetchFunction) {
    this.fetch = metodoFetch ? metodoFetch : this.fetchDeUrl;
  }

  public async getConteudoDeTabela(): Promise<Docente[]> {
    const payload = await this.fetch("docentes");
    return payload.map((docente) => docente as Docente);
  }

  private async fetchDeUrl(url: string): Promise<object[]> {
    const response = await fetch(`${this.urlBase}/${url}`);
    return await response.json();
  }

  static construirMockAPI(): BackendAPI {
    return new BackendAPI("https://localhost:4000");
  }
  static construirAPI(): BackendAPI {
    return new BackendAPI("https://localhost:3000");
  }

  static construirAPITeste(): BackendAPI {
    return new BackendAPI("", this.fetchDeTeste);
  }
  private static async fetchDeTeste(rota: string): Promise<object[]> {
    return db[rota as keyof object];
  }
}
