interface ArgsOTDDisciplinaNaTabela {
  id: string;
  nome: string;
}

export default class OTDDisciplinaNaTabela {
  id: string;
  nome: string;

  constructor({ id, nome }: ArgsOTDDisciplinaNaTabela) {
    this.id = id;
    this.nome = nome;
  }
}
