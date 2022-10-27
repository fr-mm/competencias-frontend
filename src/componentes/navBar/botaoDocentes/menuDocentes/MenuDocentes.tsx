import BotaoAdicionarDocente from "./BotaoAdicionarDocente";
import BotaoRemoverDocentes from "./BotaoRemoverDocentes";

function MenuDocentes() {
  return (
    <div className="menu azul">
      <BotaoRemoverDocentes />
      <BotaoAdicionarDocente />
    </div>
  );
}
export default MenuDocentes;
