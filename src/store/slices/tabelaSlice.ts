import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

const initialState = {
  expandida: true,
  atualizada: false,
  referencia: [] as any[],
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

    setReferencia(state, action: PayloadAction<RefObject<HTMLDivElement>>) {
      state.referencia = [action.payload];
    },
  },
});

export const { expandirContrair, setAtualizada, setReferencia } =
  tabelaSlice.actions;
export default tabelaSlice.reducer;
