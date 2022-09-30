import { createSlice } from "@reduxjs/toolkit";

const initialState = { expandida: false };

const tabelaSlice = createSlice({
  name: "tabelaExpandida",
  initialState,
  reducers: {
    expandirContrair(state) {
      state.expandida = !state.expandida;
    },
  },
});

export const { expandirContrair } = tabelaSlice.actions;
export default tabelaSlice.reducer;
