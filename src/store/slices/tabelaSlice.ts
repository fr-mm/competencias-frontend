import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  expandida: false,
  atualizada: false,
  filtrando: false,
};

const tabelaSlice = createSlice({
  name: "tabelaExpandida",
  initialState,
  reducers: {
    expandirContrair(state) {
      state.expandida = !state.expandida;
    },

    setAtualizada(state, action: PayloadAction<boolean>) {
      state.atualizada = action.payload;
    },

    setFiltrando(state, action: PayloadAction<boolean>) {
      state.filtrando = action.payload;
    },
  },
});

export const { expandirContrair, setAtualizada, setFiltrando } =
  tabelaSlice.actions;
export default tabelaSlice.reducer;
