import OTDDisciplina from "./otdDisciplina";

export default class OTDCompetencia {
  constructor(readonly disciplina: OTDDisciplina, readonly nivel: number) {}
}
