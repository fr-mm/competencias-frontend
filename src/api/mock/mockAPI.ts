/*
import { IApi, ITabela } from "../../interfaces";

export default class MockAPI implements IApi {
  private urlBase = "http://localhost:4000";

  public async getConteudoDeTabela(): Promise<Response> {
    const body = this.fetch("tabela");
    const response = new Response(JSON.stringify(body));
    return Promise.resolve(response);
  }

  public async removerDocentes(ids: ITabela.IdDocente[]): Promise<Response> {
    return Promise.resolve(new Response());
  }

  public async salvarDocente(docente: ITabela.Docente): Promise<Response> {
    return Promise.resolve(new Response());
  }

  public async removerDisciplinas(
    ids: ITabela.IdDisciplina[]
  ): Promise<Response> {
    return Promise.resolve(new Response());
  }

  public async salvarDisciplina(
    docente: ITabela.Disciplina
  ): Promise<Response> {
    return Promise.resolve(new Response());
  }

  private async fetch(rota: string): Promise<any> {
    const response = await fetch(`${this.urlBase}/${rota}`);
    return await response.json();
  }
}
*/
export {};
