import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  expandida: true,
  atualizada: false,
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
  },
});

export const { expandirContrair, setAtualizada } = tabelaSlice.actions;
export default tabelaSlice.reducer;
