import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regex } from "../../../aux";
import { EnumNivelDeCompetencia } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";

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

const getCor = (nivel: EnumNivelDeCompetencia): string => {
  return `celula borda competencia ${corDeNivel[nivel]}`;
};

function Competencia(props: CompetenciaProps): JSX.Element {
  const dispatch = useDispatch();
  const atribuindoCompetencias = useSelector(
    (state: RootState) => state.docente.atribuindoCompetencias
  );
  const editando = useSelector(
    (state: RootState) =>
      state.docente.competenciaEditando === props.disciplina.id
  );
  const docenteEditando = useSelector((state: RootState) => state.docente);
  const [valor, setValor] = useState(
    props.docente.competencias[props.disciplina.id].toString()
  );
  const nivelAntigo =
    props.docente.competencias[props.disciplina.id].toString();

  function ativarEdicao(): void {
    dispatch(reducers.docente.setCompetenciaEditando(props.disciplina.id));
  }

  function onChange(evento: ChangeEvent<HTMLInputElement>): void {
    if (evento.target.value.match(regex.onChange.nivelDeCompetencia)) {
      setValor(evento.target.value);
    }
  }

  function onBlur(): void {
    if (valor === "") {
      setValor(nivelAntigo);
    }
    dispatch(
      reducers.docente.setCompetencia({
        idDisciplina: props.disciplina.id,
        nivel: +valor,
      })
    );
    dispatch(reducers.docente.limparCompetenciaEditando());
  }
  function onKeyDown(evento: React.KeyboardEvent<HTMLInputElement>): void {
    if (evento.key === "Enter") {
      onBlur();
    }
  }

  function getNivel(): string {
    if (
      Object.keys(docenteEditando.competencias).includes(props.disciplina.id)
    ) {
      return docenteEditando.competencias[props.disciplina.id].toString();
    }
    return nivelAntigo;
  }

  const nivel = +getNivel();
  if (atribuindoCompetencias) {
    if (editando) {
      return (
        <div className={getCor(nivel) + " pointer input"}>
          <input
            id="ehue"
            type="text"
            value={valor}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
        </div>
      );
    } else {
      return (
        <div className={getCor(nivel) + " pointer"} onClick={ativarEdicao}>
          {getNivel()}
        </div>
      );
    }
  } else {
    return <div className={getCor(nivel)}>{nivel}</div>;
  }
}

export default Competencia;
