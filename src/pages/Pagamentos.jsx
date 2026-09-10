import style from "./Pagamentos.module.css";
import Cabecalho from "../components/Cabecalho";
import { Link } from "react-router-dom";

function Pagamentos() {
  return (
    <div className={style.pagamentos}>
      <header>
        <Cabecalho />
      </header>
      <main className={style.main}>
        <Link to="/">← Voltar para o catálogo</Link>

        <div className={style.descricao}>
          <h1>Formas de pagamentos</h1>
          <p>
            escolha a melhor forma para você aproveitar seus jogos favoritos
          </p>
        </div>
        <div className={style.metodos}>
          <h1>Metodos aceitos</h1>
          <ul>
            <li>
              <a href="">Cartão de Crédito </a>
            </li>
            <li>Pix</li>
            <li>Boleto</li>
            <li>Carteira digital</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Pagamentos;
