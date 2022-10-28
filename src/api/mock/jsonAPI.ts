import { IApi } from "../../interfaces";
import {
  AdicionarDocenteRequestPayload,
  RemoverDocentesRequestPayload,
} from "../../interfaces/IApi";
import db from "./fakeDB.json";

export default class JsonAPI implements IApi {
  public async getConteudoDeTabela(): Promise<Response> {
    const body = JSON.stringify(this.fetch("tabela"));
    const response = new Response(body);
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

  private fetch(url: string): any {
    return db[url as keyof object];
  }
}
