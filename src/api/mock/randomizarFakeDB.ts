import * as fs from "fs";
import * as path from "path";
import { ITabela } from "../../interfaces";

class RandomizadorDeFakeDB {
  private readonly arquivo = "./fakeDB.json";
  private readonly quantidadeDocentes = 10;

  public randomizarDB(): void {
    const conteudo = JSON.stringify({ tabela: this.construirConteudo() });
    this.sobrescreverArquivo(conteudo);
    console.log("DB randomizado");
  }

  private sobrescreverArquivo(conteudo: string): void {
    const arquivo = path.join(__dirname, this.arquivo);
    fs.writeFileSync(arquivo, conteudo, "utf8");
  }

  private construirConteudo(): ITabela.Tabela {
    const disciplinas = this.construirDisciplinas();
    const conteudo = {
      disciplinas,
      cursos: this.construirCursos(Object.values(disciplinas)),
      docentes: this.construirDocentes(Object.values(disciplinas)),
    };
    return conteudo;
  }

  private construirDocentes(
    disciplinas: ITabela.Disciplina[]
  ): ITabela.Docentes {
    const docentes: ITabela.Docentes = {};
    for (let i = 0; i < this.quantidadeDocentes + 1; i++) {
      const docente = this.construirDocente(`Docente ${i}`, disciplinas);
      docentes[docente.id] = docente;
    }
    return docentes;
  }

  private construirDocente(
    nome: string,
    disciplinas: ITabela.Disciplina[]
  ): ITabela.Docente {
    return {
      id: this.gerarId(),
      nome,
      competencias: this.construirCompetencias(disciplinas),
    };
  }

  private construirCompetencias(disciplinas: ITabela.Disciplina[]) {
    const competencias: ITabela.Competencias = {};
    for (let disciplina of disciplinas) {
      competencias[disciplina.id] = this.escolher([1, 2, 3, 4])[0];
    }
    return competencias;
  }

  private construirCursos(disciplinas: ITabela.Disciplina[]): ITabela.Cursos {
    const cursos: ITabela.Cursos = {};
    for (let i = 0; i < 2; i++) {
      const curso = this.construirCurso(
        `Curso ${i}`,
        this.escolher(disciplinas, 8)
      );
      cursos[curso.id] = curso;
    }
    return cursos;
  }

  private construirCurso(
    nome: string,
    disciplinas: ITabela.Disciplina[]
  ): ITabela.Curso {
    const disciplinasModulo1 = disciplinas.slice(0, 4);
    const disciplinasModulo2 = disciplinas.slice(5, 8);
    return {
      id: this.gerarId(),
      nome,
      modulos: {
        1: this.construirModulo(1, disciplinasModulo1),
        2: this.construirModulo(2, disciplinasModulo2),
      },
    };
  }

  private construirModulo(
    numero: number,
    disciplinas: ITabela.Disciplina[]
  ): ITabela.Modulo {
    return {
      id: this.gerarId(),
      numero: numero.toString(),
      disciplinas: disciplinas.map((disciplina) => disciplina.id),
    };
  }

  private construirDisciplinas(): ITabela.Disciplinas {
    const disciplinas: ITabela.Disciplinas = {};

    for (let i = 1; i <= 16; i++) {
      const disciplina = this.construirDisciplina(`Disciplina ${i}`);
      disciplinas[disciplina.id] = disciplina;
    }
    return disciplinas;
  }

  private construirDisciplina(nome: string): ITabela.Disciplina {
    return {
      id: this.gerarId(),
      nome,
      cargaHoraria: this.gerarCargaHoraria(),
    };
  }

  private gerarId(): string {
    return `${[1e7]}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, (c: any) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  private gerarCargaHoraria(): number {
    const min = 30;
    const max = 120;
    return Math.floor(Math.random() * max - min) + min;
  }

  private escolher(conjunto: any[], quantidade: number = 1): any[] {
    const conjuntoCopy = [...conjunto];
    for (var i = conjuntoCopy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = conjuntoCopy[i];
      conjuntoCopy[i] = conjuntoCopy[j];
      conjuntoCopy[j] = temp;
    }

    const resultado = [];
    for (let i = 0; i < quantidade + 1; i++) {
      resultado.push(conjuntoCopy.pop());
    }
    return resultado;
  }
}

new RandomizadorDeFakeDB().randomizarDB();
