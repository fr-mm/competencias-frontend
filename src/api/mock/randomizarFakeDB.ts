import * as fs from "fs";
import * as path from "path";
import { ITabela } from "../../interfaces";
import { TiposDeContratacao } from "../../interfaces/ITabela";

class RandomizadorDeFakeDB {
  private readonly arquivo = "./fakeDB.json";
  private cursos = 13;
  private disciplinas = 13;
  private disciplinasPorCurso = 8;
  private nomes = [
    "Verónica Lia",
    "Charlingtonglaevionbeecheknavare Henrique",
    "Rebeca Estevão",
    "Thiago Haroldo Almeida Silva",
    "Inês Simone",
    "Ambrósio Natália",
    "Carlos Paulo de Carlos",
    "Floro Octávio",
    "Fernando Márcia",
    "Amália Ovídio",
    "Lorena Nilda",
    "Augusto Balduíno",
    "Augusto Balduíno",
    "Aloísio Lula",
    "Victor Clementina",
    "André Leandra",
    "Onofre Tito",
    "Balduíno Severino",
    "Micael Estevão",
    "Feliciano José Manuel",
    "Nela Luiza",
    "Fúlvio Messias",
    "Teodósio Oscar",
    "Nando Camilo",
    "Cândido Sebastiana",
    "Miguela Fábio",
    "Norberto Pedro",
    "Tito Florência",
    "Apolônia Galvão",
    "Apolónia Gláucio",
    "Otília Cruz",
  ];

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
    const tiposDeContratacao = this.construirTiposDeContratacao();
    const unidadesSenai = this.construirUnidadesSenai();
    const conteudo = {
      disciplinas,
      cursos: this.construirCursos(Object.values(disciplinas)),
      docentes: this.construirDocentes(
        disciplinas,
        tiposDeContratacao,
        unidadesSenai
      ),
      tiposDeContratacao,
      unidadesSenai,
    };
    return conteudo;
  }

  private construirDocentes(
    disciplinas: ITabela.Disciplinas,
    tiposDeContratacao: ITabela.TiposDeContratacao,
    unidadesSenai: ITabela.UnidadesSenai
  ): ITabela.Docentes {
    const docentes: ITabela.Docentes = {};
    for (let i = 0; i < this.nomes.length; i++) {
      const docente = this.construirDocente(
        this.nomes[i],
        disciplinas,
        tiposDeContratacao,
        unidadesSenai
      );
      docentes[docente.id] = docente;
    }
    return docentes;
  }

  private construirDocente(
    nome: string,
    disciplinas: ITabela.Disciplinas,
    tiposDeContratacao: ITabela.TiposDeContratacao,
    unidadesSenai: ITabela.UnidadesSenai
  ): ITabela.Docente {
    const tipoDeContratacao = this.escolher(
      Object.values(tiposDeContratacao)
    )[0];
    const primeiroNome = nome.split(" ")[0].toLowerCase();
    let email = "";
    for (let letra of primeiroNome) {
      if ("qwertyuiopasdfghjklzxcvbnm".includes(letra)) {
        email += letra;
      }
    }
    return {
      id: this.gerarId(),
      nome,
      email: `${email}@email.com`,
      telefones: ["(71)99999-9999"],
      unidadeSenai: Object.values(unidadesSenai)[0].id,
      tipoDeContratacao: tipoDeContratacao.id,
      competencias: this.construirCompetencias(Object.values(disciplinas)),
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
    for (let i = 0; i < this.cursos; i++) {
      const curso = this.construirCurso(
        `Curso ${i}`,
        this.escolher(disciplinas, this.disciplinasPorCurso)
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
    const modulos = [
      this.construirModulo(1, disciplinasModulo1),
      this.construirModulo(2, disciplinasModulo2),
    ];
    const modulosMap = {} as any;
    for (let modulo of modulos) {
      modulosMap[modulo.id] = modulo;
    }
    return {
      id: this.gerarId(),
      nome,
      modulos: modulosMap,
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

    for (let i = 1; i <= this.disciplinas; i++) {
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

  private construirTiposDeContratacao(): ITabela.TiposDeContratacao {
    const nomes = ["horista", "mensalista", "prestador de serviço"];
    const tiposDeContratacao: TiposDeContratacao = {};
    for (let nome of nomes) {
      const id = this.gerarId();
      tiposDeContratacao[id] = { id, nome };
    }
    return tiposDeContratacao;
  }

  private construirUnidadesSenai(): ITabela.UnidadesSenai {
    const id = this.gerarId();
    const unidade = { id, nome: "Lauro de Freitas" };
    const unidadesSenai: ITabela.UnidadesSenai = {};
    unidadesSenai[id] = unidade;
    return unidadesSenai;
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
