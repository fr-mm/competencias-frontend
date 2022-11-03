import "./Legendas.css";

function Legendas(): JSX.Element {
  return (
    <div className="legendas">
      <div className="legenda rosa">1: Nenhum conhecimento</div>
      <div className="legenda amarelo">2: Médio conhecimento</div>
      <div className="legenda verde">3: Total domínio</div>
      <div className="legenda">
        4: Excelência (total domínio + grande experiência prática de mercado)
      </div>
    </div>
  );
}

export default Legendas;
