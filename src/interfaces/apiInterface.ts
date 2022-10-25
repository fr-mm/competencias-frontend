import { ITabela } from "../interfaces";

export default interface APIInterface {
  getConteudoDeTabela(): Promise<ITabela.Tabela>;
  removerDocentes(ids: string[]): Promise<void>;
}
