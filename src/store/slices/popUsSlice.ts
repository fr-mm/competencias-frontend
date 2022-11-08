import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumPopUp } from "../../enums";

const initialState = {
  visiveis: [] as EnumPopUp[],
};

const popUpsSlice = createSlice({
  name: "popupsVisiveis",
  initialState,
  reducers: {
    mostrar(state, action: PayloadAction<EnumPopUp>) {
      const nome = action.payload;
      if (!state.visiveis.includes(nome)) {
        state.visiveis.push(nome);
      }
    },

    esconder(state, action: PayloadAction<EnumPopUp>) {
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
