import { IApi, ITabela } from "../../interfaces";
import db from "./fakeDB.json";

export default class JsonAPI implements IApi {
  public async getConteudoDeTabela(): Promise<Response> {
    const body = JSON.stringify(this.fetch("tabela"));
    const response = new Response(body);
    //await new Promise((r) => setTimeout(r, 200));
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

  private fetch(url: string): any {
    return db[url as keyof object];
  }
}
