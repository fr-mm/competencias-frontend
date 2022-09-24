import OTDCompetencia from "./otdCompetencia";

export default class OTDDocente {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly competencias: OTDCompetencia[]
  ) {}
}
