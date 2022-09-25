import { EnumNivelDeCompetencia } from "../enums";
import Disciplina from "./disciplina";

interface ArgsLinhaDeTabela {
  disciplina: Disciplina;
  niveisDeDocentes: EnumNivelDeCompetencia[];
}

export default class LinhaDeTabela {
  disciplina: Disciplina;
  niveisDeDocentes: EnumNivelDeCompetencia[];

  constructor({ disciplina, niveisDeDocentes }: ArgsLinhaDeTabela) {
    this.disciplina = disciplina;
    this.niveisDeDocentes = niveisDeDocentes;
  }
}
