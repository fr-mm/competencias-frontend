import * as fs from "fs";
import * as path from "path";
import { InterfaceConteudoDeTabela as Interface } from "../../interfaces";

class RandomizadorDeFakeDB {
  readonly arquivo = "./fakeDB.json";
  readonly quantidadeDocentes = 10;
  readonly disciplinas = [];
  readonly cursos = {
    "Desenvolvimento de Sistemas": {
      1: [
        "Logica de Programacao",
        "Banco de Dados",
        "Desenvolvimento Mobile",
        "TCC",
      ],
      2: ["Desenvolvimento de Sistemas I", "Disciplina II", "Disciplina III"],
    },
    "Seguranca do Trabalho": {
      1: ["Disciplina IV", "Disciplina V", "Disciplina VI"],
      2: ["Disciplina VII", "Disciplina VIII", "Disciplina IX"],
    },
  };

  public randomizarDB(): void {
    const conteudo = JSON.stringify(this.construirConteudo());
    this.sobrescreverArquivo(conteudo);
    console.log("DB randomizado");
  }

  private sobrescreverArquivo(conteudo: string) {
    const arquivo = path.join(__dirname, this.arquivo);
    fs.writeFileSync(arquivo, conteudo, "utf8");
  }

  private construirConteudo(): object {
    const docentes = this.construirDocentes();
    return {
      tabela: {
        cursos: this.construirCursos(docentes),
        docentes: docentes,
      },
    };
  }

  private construirDocentes(): Interface.Docentes {
    const docentes: Interface.Docentes = {};
    for (let i = 0; i < this.quantidadeDocentes; i++) {
      const docente = this.construirDocente();
      docentes[docente.id] = docente;
    }
    return docentes;
  }

  private construirDocente(): Interface.Docente {
    return {
      id: this.gerarId(),
      nome: this.gerarNome(),
    };
  }

  private construirCursos(docentes: Interface.Docentes): Interface.Cursos {
    const cursos: Interface.Cursos = {};
    for (let nomeCurso of Object.keys(this.cursos)) {
      const curso = this.construirCurso(nomeCurso, docentes);
      cursos[curso.id] = curso;
    }
    return cursos;
  }

  private construirCurso(nome: string, docentes: Interface.Docentes) {
    const id = this.gerarId();
    const curso = {
      id: id,
      nome: nome,
      cargaHoraria: 0,
      modulos: this.construirModulos(nome, id, docentes),
    };
    curso.cargaHoraria = Object.values(curso.modulos).reduce(
      (total, modulo) => total + modulo.cargaHoraria,
      0
    );
    return curso;
  }

  private construirModulos(
    nomeCurso: string,
    cursoId: string,
    docentes: Interface.Docentes
  ): Interface.Modulos {
    const curso = this.cursos[nomeCurso as keyof object];
    const numerosDosModulos = Object.keys(curso);
    const modulos: Interface.Modulos = {};
    for (let numero of numerosDosModulos) {
      const nomesDisciplinas = curso[numero];
      modulos[numero as keyof object] = this.construirModulo(
        numero,
        cursoId,
        nomesDisciplinas,
        docentes
      );
    }
    return modulos;
  }

  private construirModulo(
    numero: string,
    cursoId: string,
    nomesDisciplinas: string[],
    docentes: Interface.Docentes
  ): Interface.Modulo {
    const modulo: Interface.Modulo = {
      id: this.gerarId(),
      numero: numero,
      cargaHoraria: 0,
      cargaHorariaPorDocente: {},
      cursoId: cursoId,
      disciplinas: {},
    };
    for (let nome of nomesDisciplinas) {
      const disciplina = this.construirDisciplina(
        nome,
        cursoId,
        modulo.numero,
        docentes
      );
      modulo.disciplinas[disciplina.id] = disciplina;
    }
    modulo.cargaHoraria = Object.values(modulo.disciplinas).reduce(
      (total, disciplina) => total + disciplina.cargaHoraria,
      0
    );
    for (let docente of Object.values(docentes)) {
      modulo.cargaHorariaPorDocente[docente.id] = Object.values(
        modulo.disciplinas
      ).reduce((total, disciplina) => {
        const competencia = disciplina.competencias[docente.id];
        return total + (competencia >= 3 ? disciplina.cargaHoraria : 0);
      }, 0);
    }

    return modulo;
  }

  private construirDisciplina(
    nome: string,
    cursoId: string,
    moduloNumero: string,
    docentes: Interface.Docentes
  ): Interface.Disciplina {
    return {
      id: this.gerarId(),
      nome: nome,
      cargaHoraria: this.gerarCargaHoraria(),
      cursoId: cursoId,
      moduloNumero: moduloNumero,
      competencias: this.construirCompetencias(docentes),
    };
  }

  private construirCompetencias(
    docentes: Interface.Docentes
  ): Interface.Competencias {
    const competencias: Interface.Competencias = {};
    for (let docente of Object.keys(docentes)) {
      competencias[docente] = this.escolher([1, 2, 3, 4]);
    }
    return competencias;
  }

  private gerarNome(): string {
    return Math.random().toString(36).slice(2, 7);
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

  private escolher(opcoes: any[]): any {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
  }
}

new RandomizadorDeFakeDB().randomizarDB();
