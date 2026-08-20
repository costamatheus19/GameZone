import styles from "./Favoritos.module.css";
import Cabecalho from "../components/Cabecalho";

function Favoritos() {
  return (
    <div className={styles.Favoritos}>
      <Cabecalho />
      <h1 className={styles.h1}>Meus Jogos Favoritos</h1>
      <p>Todos os seus jogos favoritados estarão aqui</p>
      {/* botao de limpar favoritos(adicionar funcionalidade) */}
      <button className={styles.limpar} type="button">
        Limpar Favoritos
      </button>
    </div>
  );
}

export default Favoritos;
