import style from "./Pagamentos.module.css";
import Cabecalho from "../components/Cabecalho";
import { Link } from "react-router-dom";

import { FaCcMastercard, FaShieldAlt, FaAddressCard, FaRegClock, FaHistory } from "react-icons/fa";
import { FaPix, FaWallet } from "react-icons/fa6";
import { SlPresent, } from "react-icons/sl";
import { SiNubank } from "react-icons/si";
import { SiContactlesspayment } from "react-icons/si";
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
          <div>
          <h1>Metodos aceitos</h1>
          <ul>
            <li> <FaCcMastercard />
              <a href=""> Cartão de Crédito </a>
            </li>
            <li><FaPix />
              <a href="">pix </a>
            </li>
            <li><SiContactlesspayment />
              <a href="">Boleto bancario </a>
            </li>
            <li><FaWallet />
              <a href="">Carteira digital </a>
            </li>
          </ul>
          </div>
          <div className={style.outrosmetodos}>
            <div className={style.informacoesimportante}>
              <h1>Informações importantes</h1>
              <h2><FaAddressCard /> reembolsos</h2>
              <p>Você pode solicitar reembolso em até 7 bdias<br />
              após a compra, conforme nossa politica.</p>
              <br />
              <h2><FaRegClock /> Suporte a pagamentos</h2>
              <p>Em caso de dúvidas ou problemas com<br />
              pagametos, entre em contato com nosso suporte.</p>
              <br />
              <h2><SiNubank /> promoções e cupons</h2>
              <p>fique atento às promoções e use cupons<br />
              para obter especiais.</p>
            </div>
            
            <div className={style.seguranca}>
              <h1> < FaShieldAlt/> Segurança</h1>
                <h2>Seus dados estão protegidos</h2>
                <p>todas as transações são criptografadas<br />
                e processadas com segurança.</p>
                <br />
                <p>conexão 100% segura (SSL)</p>
                <p>Não armazenamos dados do seu cartão</p>
                <p>Conformidade com PCI DSS</p>
            </div>
          </div>

        <div className={style.footer}>
          <div className={style.hisotiricoEpagamentos}>
            <h1><FaHistory /> Histórico de compras</h1>
            <p>Acesse seu histórico completo de compras, faturas e pagamentos realizados.</p>
            <button>Ver histórico</button>
          </div>

          <div className={style.duvidas}>
            
            <h1><SlPresent /> Dúvidas sobre pagamentos?</h1>
            <p>Nossa equipe de suporte está pronta te ajudar.</p>
            <button>Ir para suporte</button>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Pagamentos;
