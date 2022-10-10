import { useSelector } from "react-redux";
import { EnumOrdem as Ordem } from "../../../enums";
import { RootState } from "../../../store";
import "./BotoesOrdenadores.css";

interface BotoesOrdenadoresProps {
  idElemento: string;
}

function BotoesOrdenadores(props: BotoesOrdenadoresProps) {
  const ordenacao = useSelector((state: RootState) => state.ordenacao);
  const seta = () => {
    if (ordenacao.idElemento === props.idElemento) {
      switch (ordenacao.ordem) {
        case Ordem.CRESCENTE:
          return <div className="seta esquerda"></div>;
        case Ordem.DECRESCENTE:
          return <div className="seta direita"></div>;
        default:
          return;
      }
    }
  };

  return <div className="botoes-ordenadores">{seta()}</div>;
}

export default BotoesOrdenadores;
export { Ordem };
