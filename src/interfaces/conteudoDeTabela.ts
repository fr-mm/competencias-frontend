interface Tabela {
  docentes: {
    [id: string]: {
      id: string;
      nome: string;
    };
  };
  cursos: {
    [id: string]: {
      id: string;
      nome: string;
      cargaHoraria: number;
      cargaHorariaPorDocente: {
        [idDocente: string]: number;
      };
      modulos: {
        [id: string]: {
          id: string;
          numero: string;
          cargaHoraria: number;
          cargaHorariaPorDocente: {
            [idDocente: string]: number;
          };
          cursoId: string;
          disciplinas: {
            [id: string]: {
              id: string;
              nome: string;
              cargaHoraria: number;
              cursoId: string;
              moduloNumero: string;
              competencias: {
                [idDocente: string]: number;
              };
            };
          };
        };
      };
    };
  };
}

type Docentes = Tabela["docentes"];
type Docente = Docentes["id"];
type Cursos = Tabela["cursos"];
type Curso = Cursos["id"];
type Modulos = Curso["modulos"];
type Modulo = Modulos["id"];
type Disciplinas = Modulo["disciplinas"];
type Disciplina = Disciplinas["id"];
type Competencias = Disciplina["competencias"];
type Competencia = Competencias["idDocente"];

export type {
  Tabela,
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
