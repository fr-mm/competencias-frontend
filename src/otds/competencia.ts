import Disciplina from "./disciplina";

export default class Competencia {
  constructor(readonly disciplina: Disciplina, readonly nivel: number) {}
}
