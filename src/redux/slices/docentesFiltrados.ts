import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceConteudoDeTabela } from "../../api";

export interface DocentesFiltradosState {
  value: InterfaceConteudoDeTabela.Docente[];
}

const initialState = { value: [] } as DocentesFiltradosState;

const docentesFiltradosSlice = createSlice({
  name: "docentesFiltradosSlice",
  initialState,
  reducers: {
    atualizarDocentesFiltrados(
      state,
      action: PayloadAction<DocentesFiltradosState>
    ) {
      console.log("oi");
      state.value = action.payload;
    },
  },
});

export const { atualizarDocentesFiltrados } = docentesFiltradosSlice.actions;
export default docentesFiltradosSlice.reducer;
