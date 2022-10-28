import { ITabela } from ".";

type RemoverDocentesRequestPayload = ITabela.IdDocente[];
type AdicionarDocenteRequestPayload = {
  nome: string;
  email: string;
  telefones: string[];
  tipoDeContratacao: ITabela.IdTipoDeContratacao;
  unidadeSenai: ITabela.IdTipoDeContratacao;
};

export default interface IApi {
  getConteudoDeTabela(): Promise<Response>;
  removerDocentes(ids: RemoverDocentesRequestPayload): Promise<Response>;
  adicionarDocente(docente: AdicionarDocenteRequestPayload): Promise<Response>;
}

export type { RemoverDocentesRequestPayload, AdicionarDocenteRequestPayload };
