type IdDocente = string;
type IdCurso = string;
type IdModulo = string;
type IdDisciplina = string;
type IdTipoDeContratacao = string;
type IdUnidadeSenai = string;

interface Tabela {
  tiposDeContratacao: {
    [id: IdTipoDeContratacao]: {
      id: IdTipoDeContratacao;
      nome: string;
    };
  };
  unidadesSenai: {
    [id: IdUnidadeSenai]: {
      id: IdUnidadeSenai;
      nome: string;
    };
  };
  docentes: {
    [id: IdDocente]: {
      id: IdDocente;
      nome: string;
      email: string;
      telefones: string[];
      tipoDeContratacao: IdTipoDeContratacao;
      unidadeSenai: IdUnidadeSenai;
      competencias: {
        [idDisciplina: IdDisciplina]: number;
      };
    };
  };
  cursos: {
    [id: IdCurso]: {
      id: IdCurso;
      nome: string;
      modulos: {
        [id: IdModulo]: {
          id: IdModulo;
          numero: string;
          disciplinas: IdDisciplina[];
        };
      };
    };
  };
  disciplinas: {
    [id: IdDisciplina]: {
      id: IdDisciplina;
      nome: string;
      cargaHoraria: number;
    };
  };
}

type Docentes = Tabela["docentes"];
type Docente = Docentes["id"];
type Cursos = Tabela["cursos"];
type Curso = Cursos["id"];
type Modulos = Curso["modulos"];
type Modulo = Modulos["id"];
type Disciplinas = Tabela["disciplinas"];
type Disciplina = Disciplinas["id"];
type Competencias = Docente["competencias"];
type TiposDeContratacao = Tabela["tiposDeContratacao"];
type TipoDeContratacao = TiposDeContratacao["id"];
type UnidadesSenai = Tabela["unidadesSenai"];
type UnidadeSenai = UnidadesSenai["id"];

export type {
  Tabela,
  IdDocente,
  IdCurso,
  IdModulo,
  IdDisciplina,
  IdUnidadeSenai,
  IdTipoDeContratacao,
  Docentes,
  Docente,
  Cursos,
  Curso,
  Modulos,
  Modulo,
  Disciplinas,
  Disciplina,
  Competencias,
  TiposDeContratacao,
  TipoDeContratacao,
  UnidadesSenai,
  UnidadeSenai,
};
