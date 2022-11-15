import "./PopUps.css";
import {
  AlterarCompetencias,
  Curso,
  DescartarAlteracoesCurso,
  DescartarAlteracoesDisciplina,
  DescartarAlteracoesDocente,
  Disciplina,
  Docente,
  GerandoPDF,
  RemoverCursos,
  RemoverDocentes,
} from "./popUps";
import { Disciplinas } from "./popUps";
import ConfirmarCancelamentoDeAtribuicaoDeCompetencias from "./popUps/ConfirmarCancelamentoDeAtribuicaoDeCompetencias";
import ConfirmarAlteracoesCurso from "./popUps/ConfirmarAlteracoesCurso";

function PopUps() {
  return (
    <div className="pop-up-container">
      <Docente />
      <Disciplinas />
      <Disciplina />
      <Curso />
      <RemoverDocentes />
      <RemoverCursos />
      <GerandoPDF />
      <AlterarCompetencias />
      <ConfirmarCancelamentoDeAtribuicaoDeCompetencias />
      <ConfirmarAlteracoesCurso />
      <DescartarAlteracoesCurso />
      <DescartarAlteracoesDocente />
      <DescartarAlteracoesDisciplina />
    </div>
  );
}

export default PopUps;
