import { InterfaceConteudoDeTabela } from "../interfaces";

export default interface APIInterface {
  getConteudoDeTabela(): Promise<InterfaceConteudoDeTabela.Tabela>;
  removerDocentes(ids: string[]): Promise<void>;
}
