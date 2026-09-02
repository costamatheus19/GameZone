import styles from "./DetalhesJogos.module.css";
import Cabecalho from "../components/Cabecalho";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  adicionarFavorito,
  removerFavorito,
  buscarFavoritos,
} from "../utils/favoritos";

function Detalhes() {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // estados dos favoritos
  const [favorito, setFavorito] = useState(false);

  // montando a estrutura dos estados
  useEffect(() => {
    setCarregando(true);

    axios
      .get(`https://www.gamerpower.com/api/giveaway?id=${id}`)
      .then((resposta) => {
        //executado caso a procura der certo
        setJogo(resposta.data);
        const favoritos = buscarFavoritos();

        const jaFavoritado = favoritos.some(
          (favorito) => favorito.id === resposta.data.id,
        );

        setFavorito(jaFavoritado);
      })
      .catch((erro) => {
        //executado caso de errado
        console.error("Erro ao buscar o jogo:", erro);
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return (
      <div className={styles.Detalhes}>
        <Cabecalho />
        <p>Carregando...</p>
      </div>
    );
  }
  if (erro || !jogo) {
    return (
      <div className={styles.Detalhes}>
        <Cabecalho />
        <Link to="/" className={styles.voltar}>
          ← voltar para o catálogo
        </Link>
        <p>Não foi possivel carregar as informações desse jogo.</p>
      </div>
    );
  }
  // Função para alternar o estado de favorito
  function alternarFavorito() {
    if (favorito) {
      removerFavorito(jogo.id);
      setFavorito(false);
    } else {
      adicionarFavorito(jogo);
      setFavorito(true);
    }
  }

  return (
    <div className={styles.Detalhes}>
      <Cabecalho />

      <main>
        <Link to="/" className={styles.voltar}>
          ← Voltar
        </Link>

        <section className={styles.hero}>
          <img src={jogo.thumbnail} alt={jogo.title} />

          <div className={styles.pai}>
            <h1>{jogo.title}</h1>
            <p>{jogo.description}</p>

            <div className={styles.Favoritar}>
              <a
                href={jogo.open_giveaway_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.jogar}
              >
                <h2>JOGAR</h2>
              </a>
              <button onClick={alternarFavorito}>
                {favorito
                  ? "★"
                  : "☆"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className={styles.informacoesJogo}>
          <div className={styles.requisitos}>
            <h2>Requisitos mínimos</h2>

            <p>✓ Sistema operacional: </p>
            <p>✓ Processador: </p>
            <p>✓ Memória: </p>
            <p>✓ Gráficos: </p>
            <p>✓ Armazenamento: </p>
          </div>

          <div className={styles.description}>
            <h2>Sobre o jogo</h2>

            <p>{jogo.description}</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Detalhes;
