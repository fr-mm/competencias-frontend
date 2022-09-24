import Competencia from "./competencia";

export default class Docente {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly competencias: Competencia[]
  ) {}
}
