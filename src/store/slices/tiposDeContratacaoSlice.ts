import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todos: {} as ITabela.TiposDeContratacao,
};

const tiposDeContratacaoSlice = createSlice({
  name: "tiposDeContratacao",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<ITabela.TiposDeContratacao>) {
      state.todos = action.payload;
    },
  },
});

export const { atualizar } = tiposDeContratacaoSlice.actions;
export default tiposDeContratacaoSlice.reducer;
