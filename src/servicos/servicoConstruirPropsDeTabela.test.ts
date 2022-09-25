import { EnumNivelDeCompetencia } from "../enums";
import { Disciplina, Docente, LinhaDeTabela } from "../otds";
import Competencia from "../otds/competencia";
import ServicoConstruirPropsDeTabela from "./servicoConstruirPropsDeTabela";

describe("ServicoConstruirPropsDeTabela", () => {
  describe("executar", () => {
    describe("QUANDO docentes informados", () => {
      it("ENTAO retorna LinhaDeTabela[] esperda", () => {
        const docentes = [
          new Docente("fake-docente-id", "fake-docente-nome", [
            new Competencia(
              new Disciplina("fake-disciplina-id", "fake-disciplina-nome"),
              EnumNivelDeCompetencia.EXCELENCIA
            ),
          ]),
        ];
        const servico = new ServicoConstruirPropsDeTabela();

        const linhasResultantes = servico.executar(docentes);

        const linhasEsperadas = [
          new LinhaDeTabela({
            disciplina: docentes[0].competencias[0].disciplina,
            niveisDeDocentes: [docentes[0].competencias[0].nivel],
          }),
        ];
        expect(linhasResultantes).toStrictEqual(linhasEsperadas);
      });
    });
  });
});
