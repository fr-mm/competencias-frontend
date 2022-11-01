import { ITabela } from ".";

export default interface IApi {
  getConteudoDeTabela(): Promise<Response>;
  removerDocentes(ids: ITabela.IdDocente[]): Promise<Response>;
  salvarDocente(docente: ITabela.Docente): Promise<Response>;
  removerDisciplinas(ids: ITabela.IdDisciplina[]): Promise<Response>;
  salvarDisciplina(disciplina: ITabela.Disciplina): Promise<Response>;
}
