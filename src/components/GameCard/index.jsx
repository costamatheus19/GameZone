import styles from "./GameCard.module.css";


function GameCard({ jogo }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.imagem}
        src={jogo.thumbnail}
        alt={jogo.title}
      />

      <div className={styles.conteudo}>
        <h2>{jogo.title}</h2>

        <p className={styles.preco}>{jogo.worth}</p>

        <p>{jogo.type}</p>

        <p>{jogo.platforms}</p>
      </div>
    </article>
  );
}

export default GameCard;