export interface ConteudoDeTabela {
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
  [idDisciplina: string]: Disciplina;
}

export interface Disciplina {
  id: string;
  nome: string;
  competencias: Competencias;
}

export interface Competencias {
  [idDocente: string]: number;
}
