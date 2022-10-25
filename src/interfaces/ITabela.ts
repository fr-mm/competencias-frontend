type IdDocente = string;
type IdCurso = string;
type IdModulo = string;
type IdDisciplina = string;

interface Tabela {
  docentes: {
    [id: IdDocente]: {
      id: IdDocente;
      nome: string;
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
type Competencia = Competencias["idDocente"];

export type {
  Tabela,
  IdDocente,
  IdCurso,
  IdModulo,
  IdDisciplina,
  Docentes,
  Docente,
  Cursos,
  Curso,
  Modulos,
  Modulo,
  Disciplinas,
  Disciplina,
  Competencias,
  Competencia,
};
