import styles from "./Favoritos.module.css";
import Cabecalho from "../components/Cabecalho";
import { buscarFavoritos, limparFavoritos } from "../utils/favoritos";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const jogosFavoritos = buscarFavoritos();

    setFavoritos(jogosFavoritos);
  }, []);

  function handleLimparFavoritos() {
    limparFavoritos();
    setFavoritos([]);
  }

  return (
    <div className={styles.Favoritos}>
      <Cabecalho />

      <h1 className={styles.h1}>Meus Jogos Favoritos</h1>

      <p>Todos os seus jogos favoritados estarão aqui</p>

      <button
        className={styles.limpar}
        type="button"
        onClick={handleLimparFavoritos}
      >
        Limpar Favoritos
      </button>

      {favoritos.length === 0 ? (
        <p>Você ainda não possui jogos favoritos.</p>
      ) : (
        <div className={styles.listaJogos}>
          {favoritos.map((jogo) => (
            <GameCard key={jogo.id} jogo={jogo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
