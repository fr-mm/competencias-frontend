import { OTDDocente } from "./otds";

export default class BackendAPI {
  constructor(readonly urlBase: string) {}

  public async getConteudoDaTabela(): Promise<OTDDocente[]> {
    const payload = await this.fetch("docentes");
    return payload.map((docente) => docente as OTDDocente);
  }

  private async fetch(url: string): Promise<object[]> {
    const response = await fetch(`${this.urlBase}/${url}`);
    return await response.json();
  }
}
