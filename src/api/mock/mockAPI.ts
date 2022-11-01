import { IApi } from "../../interfaces";
import {
  AdicionarDocenteRequestPayload,
  RemoverDocentesRequestPayload,
} from "../../interfaces/IApi";

export default class MockAPI implements IApi {
  private urlBase = "http://localhost:4000";

  public async getConteudoDeTabela(): Promise<Response> {
    const body = this.fetch("tabela");
    const response = new Response(JSON.stringify(body));
    return Promise.resolve(response);
  }

  public async removerDocentes(
    ids: RemoverDocentesRequestPayload
  ): Promise<Response> {
    return Promise.resolve(new Response());
  }

  public async adicionarDocente(
    docente: AdicionarDocenteRequestPayload
  ): Promise<Response> {
    return Promise.resolve(new Response());
  }

  private async fetch(rota: string): Promise<any> {
    const response = await fetch(`${this.urlBase}/${rota}`);
    return await response.json();
  }
}