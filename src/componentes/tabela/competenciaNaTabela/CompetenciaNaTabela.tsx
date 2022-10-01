import "./CompetenciaNaTabela.css";
import { EnumNivelDeCompetencia } from "../../../enums";
import { InterfaceConteudoDeTabela } from "../../../interfaces";

interface CompetenciaNaTabelaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
  docente: InterfaceConteudoDeTabela.Docente;
}

const getClassNameDeNivel = (nivel: EnumNivelDeCompetencia): string => {
  return `celula borda competencia nivel${nivel}`;
};

function CompetenciaNaTabela(props: CompetenciaNaTabelaProps) {
  const nivel: EnumNivelDeCompetencia =
    props.disciplina.competencias[props.docente.id];

  return <div className={getClassNameDeNivel(nivel)}>{nivel}</div>;
}

export default CompetenciaNaTabela;
