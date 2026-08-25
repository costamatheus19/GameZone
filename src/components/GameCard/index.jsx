import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";

function GameCard({ jogo }) {
  return (
    <Link to={`/jogo/${jogo.id}`}>
      <article className={styles.card}>
        <img className={styles.imagem} src={jogo.thumbnail} alt={jogo.title} />

        <div className={styles.conteudo}>
          <h2>{jogo.title}</h2>

          <p className={styles.preco}>{jogo.worth}</p>

          <p>{jogo.type}</p>

          <p>{jogo.platforms}</p>

          <p>{jogo.status}</p>
        </div>
      </article>
    </Link>
  );
}

export default GameCard;
