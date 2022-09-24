import { EnumNivelDeCompetencia } from "../enums";
import DisciplinaNaTabela from "./disciplinaNaTabela";

interface ArgsLinhaDeTabela {
  disciplina: DisciplinaNaTabela;
  niveisDeDocentes: EnumNivelDeCompetencia[];
}

export default class LinhaDeTabela {
  disciplina: DisciplinaNaTabela;
  niveisDeDocentes: EnumNivelDeCompetencia[];

  constructor({ disciplina, niveisDeDocentes }: ArgsLinhaDeTabela) {
    this.disciplina = disciplina;
    this.niveisDeDocentes = niveisDeDocentes;
  }
}
