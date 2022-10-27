import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todas: {} as ITabela.UnidadesSenai,
};

const unidadesSenaiSlice = createSlice({
  name: "unidadesSenai",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<ITabela.UnidadesSenai>) {
      state.todas = action.payload;
    },
  },
});

export const { atualizar } = unidadesSenaiSlice.actions;
export default unidadesSenaiSlice.reducer;
