import { Docente, LinhaDeTabela, Disciplina } from "../otds";

export default class ServicoConstruirPropsDeTabela {
  public executar(docentes: Docente[]): LinhaDeTabela[] {
    const disciplinas = this.extrairDisciplinas(docentes);
    const linhasNaoPopuladas = this.construirLinhas(disciplinas);
    return this.popularLinhas(linhasNaoPopuladas, docentes);
  }

  private extrairDisciplinas(docentes: Docente[]): Disciplina[] {
    if (docentes.length === 0) {
      return [];
    }
    return docentes[0].competencias.map(
      (competencia) => competencia.disciplina
    );
  }

  private construirLinhas(disciplinas: Disciplina[]): LinhaDeTabela[] {
    const linhas = [];
    for (let disciplina of disciplinas) {
      const linha = new LinhaDeTabela({
        disciplina: disciplina,
        niveisDeDocentes: [],
      });
      linhas.push(linha);
    }
    return linhas;
  }

  private popularLinhas(
    linhas: LinhaDeTabela[],
    docentes: Docente[]
  ): LinhaDeTabela[] {
    for (let i = 0; i < linhas.length; i++) {
      for (let docente of docentes) {
        const linha = linhas[i];
        linha.niveisDeDocentes.push(docente.competencias[i].nivel);
      }
    }
    return linhas;
  }
}
