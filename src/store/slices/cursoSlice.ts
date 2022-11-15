import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regex } from "../../aux";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  modulos: {} as ITabela.Modulos,
  quantidadeModulos: 1,
  editando: false,
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
      state.editando = false;
    },

    carregar(state, action: PayloadAction<ITabela.Curso>) {
      const curso = action.payload;
      state.id = curso.id;
      state.nome = curso.nome;
      state.modulos = curso.modulos;
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
        disciplina: ITabela.Disciplina;
      }>
    ) {
      const modulo = state.modulos[action.payload.idModulo];
      const disciplina = action.payload.disciplina;
      if (!modulo.disciplinas.includes(disciplina.id)) {
        state.modulos[modulo.id].disciplinas.push(disciplina.id);
      }
    },

    removerDisciplinaEmModulo(
      state,
      action: PayloadAction<{
        idModulo: ITabela.IdModulo;
        disciplina: ITabela.Disciplina;
      }>
    ) {
      const modulo = state.modulos[action.payload.idModulo];
      const disciplina = action.payload.disciplina;
      if (modulo.disciplinas.includes(disciplina.id)) {
        state.modulos[modulo.id].disciplinas.splice(
          modulo.disciplinas.indexOf(disciplina.id),
          1
        );
      }
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
} = cursoSlice.actions;

export default cursoSlice.reducer;
