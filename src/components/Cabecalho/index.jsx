import styles from "./Cabecalho.module.css";
import Search from "../SearchBar";
import { Link } from "react-router-dom";
function Cabecalho() {
  return (
    <header className={styles.Cabecalho}>

      <div>
      <a href="/" className={styles.h1}>Game</a>
      <a href="/" className={styles.a}>Hub</a>
      </div>
      <a href="/">Loja</a>
      <Link className={styles.favoritos} to="/favoritos">
        Favoritos
      </Link>
      <Link to="/suporte">Suporte</Link>
      <Search />
    </header>
  );
}

export default Cabecalho;
