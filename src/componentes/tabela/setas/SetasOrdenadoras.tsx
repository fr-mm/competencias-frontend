import "./Setas.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumOrdem } from "../../../enums";
import { reducers, RootState } from "../../../store";

interface BotoesOrdenadoresProps {
  idElemento: string;
  ordenarCrescente: Function;
  ordenarDecrescente: Function;
}

function BotoesOrdenadores(props: BotoesOrdenadoresProps) {
  const dispatch = useDispatch();
  const ordenacao = useSelector((state: RootState) => state.ordenacao);
  const corSeta = {
    esquerda: "cinza",
    direita: "cinza",
  };

  function mudarOrdem() {
    if (ordenacao.idElemento === props.idElemento) {
      switch (ordenacao.proximaOrdem) {
        case EnumOrdem.DECRESCENTE:
          dispatch(props.ordenarDecrescente(props.idElemento));
          break;
        case EnumOrdem.CRESCENTE:
          dispatch(props.ordenarCrescente(props.idElemento));
          break;
        case EnumOrdem.NENHUMA:
          dispatch(reducers.docentes.ordenarAlfabeticamente());
      }
      dispatch(reducers.ordenacao.alternarOrdem());
    } else {
      dispatch(props.ordenarDecrescente(props.idElemento));
      dispatch(reducers.ordenacao.mudarElemento(props.idElemento));
    }
  }

  if (ordenacao.idElemento === props.idElemento) {
    switch (ordenacao.ordem) {
      case EnumOrdem.CRESCENTE:
        corSeta.esquerda = "preta";
        break;
      case EnumOrdem.DECRESCENTE:
        corSeta.direita = "preta";
        break;
    }
  }
  return (
    <div className="seta-container pointer" onClick={mudarOrdem}>
      <div className={"seta horizontal esquerda " + corSeta.esquerda}></div>
      <div className={"seta horizontal direita " + corSeta.direita}></div>
    </div>
  );
}

export default BotoesOrdenadores;
