import { EnumNivelDeCompetencia } from "../enums";
import OTDDisciplinaNaTabela from "./otdDisciplinaNaTabela";

interface ArgsOTDLinhaDeTabela {
  disciplina: OTDDisciplinaNaTabela;
  niveisDeDocentes: EnumNivelDeCompetencia[];
}

export default class OTDLinhaDeTabela {
  disciplina: OTDDisciplinaNaTabela;
  niveisDeDocentes: EnumNivelDeCompetencia[];

  constructor({ disciplina, niveisDeDocentes }: ArgsOTDLinhaDeTabela) {
    this.disciplina = disciplina;
    this.niveisDeDocentes = niveisDeDocentes;
  }
}
