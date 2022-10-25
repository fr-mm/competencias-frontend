import { EnumNivelDeCompetencia } from "../../../enums";
import { ITabela } from "../../../interfaces";

interface CompetenciaProps {
  disciplina: ITabela.Disciplina;
  docente: ITabela.Docente;
}

const corDeNivel = {
  1: "rosa",
  2: "amarelo",
  3: "verde",
  4: "",
};

const getClassNameDeNivel = (nivel: EnumNivelDeCompetencia): string => {
  return `celula borda competencia ${corDeNivel[nivel]}`;
};

function Competencia(props: CompetenciaProps) {
  const nivel = props.docente.competencias[props.disciplina.id];

  return <div className={getClassNameDeNivel(nivel)}>{nivel}</div>;
}

export default Competencia;
