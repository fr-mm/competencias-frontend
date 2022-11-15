import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regex } from "../../aux";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  modulos: {} as ITabela.Modulos,
  quantidadeModulos: 1,
  quantidadeMaximaDeModulos: 9,
  editando: false,
  erros: [] as string[],
};

const cursoSlice = createSlice({
  name: "curso",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<ITabela.IdCurso>) {
      state.id = action.payload;
    },

    setNome(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.nomeDeCurso)) {
        state.nome = action.payload;
      }
    },

    iniciarEdicao(state) {
      state.editando = true;
    },

    finalizarEdicao(state) {
      state.id = initialState.id;
      state.nome = initialState.nome;
      state.erros = [];
      state.editando = false;
    },

    carregar(state, action: PayloadAction<ITabela.Curso>) {
      const curso = action.payload;
      const modulos = structuredClone(curso.modulos);
      const modulosExistentes = Object.keys(modulos).length;
      for (
        let i = modulosExistentes + 1;
        i <= state.quantidadeMaximaDeModulos;
        i++
      ) {
        const idFalsa = `novo${i}`;
        modulos[idFalsa] = {
          id: idFalsa,
          numero: i.toString(),
          disciplinas: [],
        };
      }
      state.id = curso.id;
      state.nome = curso.nome;
      state.modulos = modulos;
      state.quantidadeModulos = Object.keys(action.payload.modulos).length;
      state.editando = false;
    },

    setQuantidadeModulos(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.nomeDeCurso)) {
        state.quantidadeModulos = +action.payload;
      }
    },

    adicionarDisciplinaEmModulo(
      state,
      action: PayloadAction<{
        idModulo: ITabela.IdModulo;
        idDisciplina: ITabela.IdDisciplina;
      }>
    ) {
      const modulo = state.modulos[action.payload.idModulo];
      if (!modulo.disciplinas.includes(action.payload.idDisciplina)) {
        state.modulos[modulo.id].disciplinas.push(action.payload.idDisciplina);
      }
    },

    removerDisciplinaEmModulo(
      state,
      action: PayloadAction<{
        idModulo: ITabela.IdModulo;
        idDisciplina: ITabela.IdDisciplina;
      }>
    ) {
      const modulo = state.modulos[action.payload.idModulo];
      const idDisciplina = action.payload.idDisciplina;
      if (modulo.disciplinas.includes(idDisciplina)) {
        state.modulos[modulo.id].disciplinas.splice(
          modulo.disciplinas.indexOf(idDisciplina),
          1
        );
      }
    },
    setErros(state, action: PayloadAction<string[]>) {
      state.erros = action.payload;
    },
  },
});

export const {
  setId,
  setNome,
  iniciarEdicao,
  finalizarEdicao,
  carregar,
  setQuantidadeModulos,
  adicionarDisciplinaEmModulo,
  removerDisciplinaEmModulo,
  setErros,
} = cursoSlice.actions;

export default cursoSlice.reducer;
