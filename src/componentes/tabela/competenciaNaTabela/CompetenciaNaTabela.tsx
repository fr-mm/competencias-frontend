import { EnumNivelDeCompetencia } from "../../../enums";
import { InterfaceConteudoDeTabela } from "../../../interfaces";

interface CompetenciaNaTabelaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
  docente: InterfaceConteudoDeTabela.Docente;
}

const corDeNivel = {
  1: "vermelho",
  2: "amarelo",
  3: "verde",
  4: "",
};

const getClassNameDeNivel = (nivel: EnumNivelDeCompetencia): string => {
  return `celula borda competencia ${corDeNivel[nivel]}`;
};

function CompetenciaNaTabela(props: CompetenciaNaTabelaProps) {
  const nivel: EnumNivelDeCompetencia =
    props.disciplina.competencias[props.docente.id];

  return <div className={getClassNameDeNivel(nivel)}>{nivel}</div>;
}

export default CompetenciaNaTabela;
