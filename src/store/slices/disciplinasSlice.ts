import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todas: {} as ITabela.Disciplinas,
};

const disciplinasSlice = createSlice({
  name: "disciplinas",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<ITabela.Disciplinas>) {
      state.todas = action.payload;
    },
  },
});

export const { atualizar } = disciplinasSlice.actions;
export default disciplinasSlice.reducer;
