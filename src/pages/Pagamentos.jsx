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
            <li>
              <a href="">pix </a>
            </li>
            <li>
              <a href="">Boleto bancario </a>
            </li>
            <li>
              <a href="">Carteira digital </a>
            </li>
          </ul>

          <div className={style.outrosmetodos}>
            <div className={style.informacoesimportante}>
              <h1>Informações importantes</h1>
              <h2>reembolsos</h2>
              <p>Você pode solicitar reembolso em até 7 bdias<br />
              após a compra, conforme nossa politica.</p>
              <br />
              <h2>Suporte a pagamentos</h2>
              <p>Em caso de dúvidas ou problemas com<br />
              pagametos, entre em contato com nosso suporte.</p>
              <br />
              <h2>promoções e cupons</h2>
              <p>fique atento às promoções e use cupons<br />
              para obter especiais.</p>

            </div>
            <div className={style.seguranca}>
              <h1>Segurança</h1>
                <h2>Seus dados estão protegidos</h2>
                <p>todas as transações são criptografadas<br />
                e processadas com segurança.</p>
                <br />
                <p>conexão 100% segura (SSL)</p>
                <p>Não armazenamos dados do seu cartão</p>~
                <p>Conformidade com PCI DSS</p>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}

export default Pagamentos;
