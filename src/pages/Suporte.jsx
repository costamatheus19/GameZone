import style from "./Suporte.module.css";
import Cabecalho from "../components/Cabecalho/index";
import { Link } from "react-router-dom";
import Search from "../components/SearchBar";
function Suporte() {
  return (
    <div className={style.suporte}>
      <header>
        <Cabecalho />
      </header>

      <main className={style.main}>
        <div className={style.container}>
          <Link to="/">← Voltar para o catálogo</Link>
          <h1>Como podemos ajudar?</h1>
          <p>
            Encontre respostas para suas dúvidas ou entre em contato com nossa
            equipe de suporte.
          </p>
          <Search />
        </div>

        <div className={style.topicos}>
          <h2>Topicos de Suporte</h2>

          <div className={style.topicosSuporte}>
            <ul>
              <li>
                <a>Problema de conta</a>
              </li>
              <li>
                <a>Dowloads e intalações</a>
              </li>
              <li>
                <a>Pagamentos e reembolsos</a>
              </li>
              <li>
                <a>Problemas técnicos</a>
              </li>
            </ul>
          </div>

          <div className={style.perguntasEcontatos}>
            <div className={style.perguntas}>
              <h2>perguntas frequentes</h2>
              <select>
                <option>Como faço para recuperar minha conta?</option>
              </select>
              <select>
                <option>Quais as formas de pagamento?</option>
              </select>
              <select>
                <option>Como faço para reembolsar um jogo?</option>
              </select>
              <select>
                <option>O que fazer se o jogo não instalar?</option>
              </select>

              <a href="#">Ver todas as perguntas frequentes </a>
            </div>

            <div className={style.contatos}>
              <h2>Entre em Contato</h2>
              <h2>
                Entre em contato com nossa equipe de suporte através dos canais
                abaixo:
              </h2>
              <p>
                Não encontrou o que precisava?
                <br /> Fale diretamente com nossa equipe!
              </p>
              <h3>chat ao vivo</h3>
                <h3>email</h3>
                <h3>telefone</h3>
                <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Suporte;
