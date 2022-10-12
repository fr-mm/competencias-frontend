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
    <div className="filtro-docentes">
      <label>
        Filtrar docentes:
        <input
          type="text"
          onChange={(evento) => onChange(evento.target.value)}
        />
      </label>
    </div>
  );
}

export default FiltroDocentes;
