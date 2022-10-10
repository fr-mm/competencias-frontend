import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ordem } from "../../componentes/tabela/botoesOrdenadores";

type IdElemento = string;

const proximaOrdem = new Map<Ordem, Ordem>();
proximaOrdem.set(Ordem.NENHUMA, Ordem.DECRESCENTE);
proximaOrdem.set(Ordem.DECRESCENTE, Ordem.CRESCENTE);
proximaOrdem.set(Ordem.CRESCENTE, Ordem.NENHUMA);

function getProximaOrdem(ordem: Ordem): Ordem {
  return proximaOrdem.get(ordem) as Ordem;
}

const initialState = {
  ordem: Ordem.NENHUMA,
  proximaOrdem: getProximaOrdem(Ordem.NENHUMA),
  idElemento: "",
};

const ordenacaoSlice = createSlice({
  name: "ordenacao",
  initialState,
  reducers: {
    mudarElemento(state, action: PayloadAction<IdElemento>) {
      state.idElemento = action.payload;
      state.ordem = Ordem.DECRESCENTE;
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
