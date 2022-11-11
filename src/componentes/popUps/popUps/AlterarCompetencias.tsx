import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { reducers, RootState } from "../../../store";
import { PopUp, RodapeConfirmacao } from "../base";

function AlterarCompetencias(): JSX.Element {
  const dispatch = useDispatch();
  const docente = useSelector((state: RootState) => state.docente);
  const docentes = useSelector((state: RootState) => state.docentes.todos);
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.ALTERAR_COMPETENCIAS));
  }

  function confirmar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.ALTERAR_COMPETENCIAS));
    dispatch(reducers.docente.limparCompetenciaEditando());
    dispatch(reducers.docentes.filtrarPorNome(""));
    dispatch(reducers.painel.esconder());
    dispatch(reducers.docente.finalizarAtribuicaoCompetencias());
    dispatch(reducers.tabela.setAtualizada(false));
    dispatch(reducers.docente.finalizarEdicao());
  }

  let houveAlteracao = false;

  function AvisoSemAlteracao(): JSX.Element {
    if (!houveAlteracao) {
      return <div>Sem alterações</div>;
    }
    return <></>;
  }

  if (docente.atribuindoCompetencias) {
    return (
      <PopUp
        flag={EnumPopUp.ALTERAR_COMPETENCIAS}
        titulo={"Alterar competências de " + docente.nome}
        tamanho={EnumTamanhoPopUp.MEDIO}
      >
        <div className="competencias-alteradas">
          {Object.keys(docente.competencias).map((idDisciplina) => {
            const nivelAntigo = docentes[docente.id].competencias[idDisciplina];
            const nivelNovo = docente.competencias[idDisciplina];

            if (nivelNovo !== nivelAntigo) {
              houveAlteracao = true;
              return (
                <CompetenciaAlterada
                  key={"alterada" + idDisciplina}
                  nomeDisciplina={disciplinas[idDisciplina].nome}
                  nivelAntigo={nivelAntigo}
                  nivelNovo={nivelNovo}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
        <AvisoSemAlteracao />
        <RodapeConfirmacao confirmar={confirmar} cancelar={cancelar} />
      </PopUp>
    );
  } else {
    return <></>;
  }
}

interface CompetenciaAlteradaProps {
  nomeDisciplina: string;
  nivelAntigo: number;
  nivelNovo: number;
}

function CompetenciaAlterada(props: CompetenciaAlteradaProps): JSX.Element {
  return (
    <div className="linha-competencia-alterada">
      <div className="nome-competencia-alterada">{props.nomeDisciplina}</div>
      <div className="niveis-competencia-alterada">
        {props.nivelAntigo + "  ->  " + props.nivelNovo}
      </div>
    </div>
  );
}

export default AlterarCompetencias;
