import "./PopUpDocente.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../enums";
import { reducers, RootState } from "../../store";
import { ChangeEvent, useEffect } from "react";

function PopUpDocente() {
  const dispatch = useDispatch();
  const unidadesSenai = useSelector(
    (state: RootState) => state.unidadesSenai.todas
  );
  const tiposDeContratacao = useSelector(
    (state: RootState) => state.tiposDeContratacao.todos
  );
  const docente = useSelector((state: RootState) => state.docente);
  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.ADICIONAR_DOCENTE));
    dispatch(reducers.docente.finalizarEdicao());
  }

  function adicionar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.ADICIONAR_DOCENTE));
    //enviar request na api
    dispatch(reducers.tabela.setAtualizada(false));
  }

  function adicionarTelefone(): void {
    dispatch(reducers.docente.adicionarTelefone());
  }

  function removerTelefone(telefone: string): void {
    dispatch(reducers.docente.removerTelefone(telefone));
  }

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.docente.setNome(evento.target.value));
  }

  function emailOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.docente.setEmail(evento.target.value));
  }

  function telefoneOnChange(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(reducers.docente.setTelefoneEmEdicao(evento.target.value));
  }

  function unidadeSenaiOnChange(evento: ChangeEvent<HTMLSelectElement>): void {
    dispatch(reducers.docente.setUnidadeSenai(evento.target.value));
  }

  function tipoDeContratacaoOnChange(
    evento: ChangeEvent<HTMLSelectElement>
  ): void {
    dispatch(reducers.docente.setTipoDeContratacao(evento.target.value));
  }
  function setOpcoesPadrao(): void {
    if (docente.tipoDeContratacao === "") {
      dispatch(
        reducers.docente.setTipoDeContratacao(
          Object.values(tiposDeContratacao)[0].id
        )
      );
    }

    if (docente.unidadesSenai === "") {
      dispatch(
        reducers.docente.setUnidadeSenai(Object.values(unidadesSenai)[0].id)
      );
    }
  }

  useEffect(() => {
    setOpcoesPadrao();
    dispatch(reducers.docente.iniciarEdicao());
  });

  return (
    <div className="mascara">
      <div className="popUp">
        <div className="titulo">Adicionar docente</div>
        <div className="form">
          <div className="par">
            <label htmlFor="nome">nome</label>
            <div className="coluna-direita">
              <input
                id="nome"
                className="azul-claro input"
                type="text"
                value={docente.nome}
                onChange={nomeOnChange}
                autoComplete="off"
                maxLength={50}
              />
            </div>
          </div>

          <div className="par">
            <label htmlFor="email">email</label>
            <div className="coluna-direita">
              <input
                id="email"
                className="azul-claro input"
                type="email"
                value={docente.email}
                onChange={emailOnChange}
                autoComplete="none"
              />
            </div>
          </div>

          <div className="par">
            <label htmlFor="telefone">telefones</label>
            <div className="coluna-direita">
              <input
                id="telefone"
                className="azul-claro"
                value={docente.telefoneEmEdicao}
                type="text"
                onChange={telefoneOnChange}
                autoComplete="none"
              />
              <button
                className="adicionar-telefone"
                onClick={adicionarTelefone}
              >
                adicionar
              </button>
            </div>
          </div>

          <div className="par">
            <label htmlFor=""></label>
            <div className="telefones-adicionados">
              {docente.telefones.map((telefone) => (
                <div key={telefone} className="coluna-direita">
                  <div className="telefone-adicionado">{telefone}</div>
                  <button onClick={() => removerTelefone(telefone)}>
                    remover
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="par">
            <label htmlFor="unidadesSenai">unidade SENAI</label>
            <div className="coluna-direita">
              <select
                id="unidadesSenai"
                value={docente.unidadesSenai}
                onChange={unidadeSenaiOnChange}
              >
                {Object.values(unidadesSenai).map((unidade) => (
                  <option value={unidade.id} key={unidade.id}>
                    {unidade.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="par">
            <label htmlFor="tipoDeContratacao">tipo de contratação</label>
            <div className="coluna-direita">
              <select
                id="tipoDeContratacao"
                value={docente.tipoDeContratacao}
                onChange={tipoDeContratacaoOnChange}
              >
                {Object.values(tiposDeContratacao).map((tipo) => (
                  <option value={tipo.id} key={tipo.id}>
                    {tipo.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rodape">
          <button onClick={adicionar}>adicionar</button>
          <button onClick={cancelar}>cancelar</button>
        </div>
      </div>
    </div>
  );
}
export default PopUpDocente;
