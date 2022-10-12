import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumPopUpNomes } from "../../enums";

const initialState = {
  visiveis: [] as EnumPopUpNomes[],
};

const popUpsSlice = createSlice({
  name: "popupsVisiveis",
  initialState,
  reducers: {
    mostrar(state, action: PayloadAction<EnumPopUpNomes>) {
      const nome = action.payload;
      if (!state.visiveis.includes(nome)) {
        state.visiveis.push(nome);
      }
    },

    esconder(state, action: PayloadAction<EnumPopUpNomes>) {
      const nome = action.payload;
      if (state.visiveis.includes(nome)) {
        const index = state.visiveis.indexOf(nome);
        state.visiveis.splice(index);
      }
    },
  },
});

export const { mostrar, esconder } = popUpsSlice.actions;
export default popUpsSlice.reducer;
