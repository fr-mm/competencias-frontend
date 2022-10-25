import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

type Carga = {
  horas: number;
  porcentagem: number;
};
type CHModulos = { [id: ITabela.IdModulo]: number };
type CHCursos = { [id: ITabela.IdCurso]: number };
type CHDocenteModulos = { [id: ITabela.IdModulo]: Carga };
type CHDocenteCursos = { [id: ITabela.IdCurso]: Carga };
type CHDocente = {
  cursos: CHDocenteCursos;
  modulos: CHDocenteModulos;
};
type CHDocentes = { [id: ITabela.IdDocente]: CHDocente };

const initialState = {
  modulos: {} as CHModulos,
  cursos: {} as CHCursos,
  docentes: {} as CHDocentes,
};

const cargaHorariaSlice = createSlice({
  name: "cargaHoraria",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<typeof initialState>) {
      state.cursos = action.payload.cursos;
      state.modulos = action.payload.modulos;
      state.docentes = action.payload.docentes;
    },
  },
});

export const { atualizar } = cargaHorariaSlice.actions;
export default cargaHorariaSlice.reducer;
export type CargaHorariaState = typeof initialState;
