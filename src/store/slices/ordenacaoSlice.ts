import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumOrdem } from "../../enums";

type IdElemento = string;

const proximaOrdem = new Map<EnumOrdem, EnumOrdem>();
proximaOrdem.set(EnumOrdem.NENHUMA, EnumOrdem.DECRESCENTE);
proximaOrdem.set(EnumOrdem.DECRESCENTE, EnumOrdem.CRESCENTE);
proximaOrdem.set(EnumOrdem.CRESCENTE, EnumOrdem.NENHUMA);

function getProximaOrdem(ordem: EnumOrdem): EnumOrdem {
  return proximaOrdem.get(ordem) as EnumOrdem;
}

const initialState = {
  ordem: EnumOrdem.NENHUMA,
  proximaOrdem: getProximaOrdem(EnumOrdem.NENHUMA),
  idElemento: "",
};

const ordenacaoSlice = createSlice({
  name: "ordenacao",
  initialState,
  reducers: {
    mudarElemento(state, action: PayloadAction<IdElemento>) {
      state.idElemento = action.payload;
      state.ordem = EnumOrdem.DECRESCENTE;
      state.proximaOrdem = getProximaOrdem(state.ordem);
    },

    alternarOrdem(state) {
      state.ordem = state.proximaOrdem;
      state.proximaOrdem = getProximaOrdem(state.ordem);
    },
  },
});

export const { alternarOrdem, mudarElemento } = ordenacaoSlice.actions;
export default ordenacaoSlice.reducer;
