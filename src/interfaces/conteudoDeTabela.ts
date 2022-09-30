export interface Tabela {
  docentes: Docentes;
  cursos: Cursos;
}

export interface Docentes {
  [id: string]: Docente;
}

export interface Docente {
  id: string;
  nome: string;
}

export interface Cursos {
  [id: string]: Curso;
}

export interface Curso {
  id: string;
  nome: string;
  modulos: Modulos;
}

export interface Modulos {
  [numero: number]: Modulo;
}

export interface Modulo {
  id: string;
  numero: string;
  cursoId: string;
  disciplinas: { [idDisciplina: string]: Disciplina };
}

export interface Disciplina {
  id: string;
  nome: string;
  cursoId: string;
  moduloNumero: string;
  competencias: Competencias;
}

export interface Competencias {
  [idDocente: string]: number;
}
