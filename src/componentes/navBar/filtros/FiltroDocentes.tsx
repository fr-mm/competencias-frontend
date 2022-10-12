import { useDispatch } from "react-redux";
import { reducers } from "../../../store";

function FiltroDocentes() {
  const dispatch = useDispatch();

  function onChange(nome: string): void {
    nome = nome.trim();
    dispatch(reducers.docentes.filtrarPorNome(nome));
    if (nome === "") {
      dispatch(reducers.docentes.ordenarAlfabeticamente());
    }
  }

  return (
    <div className="filtro">
      <label htmlFor="filtrarDocentes">docentes</label>
      <div className="filtro-docentes">
        <input
          className="azul-claro"
          id="filtrarDocentes"
          type="text"
          onChange={(evento) => onChange(evento.target.value)}
        />
      </div>
    </div>
  );
}

export default FiltroDocentes;
