import styles from "./Cabecalho.module.css";
import Search from "../SearchBar";
import { Link } from "react-router-dom";
function Cabecalho() {
  return (
    <header className={styles.Cabecalho}>
      {/* <img src={Logo} alt="Logo GameHub" className={styles.Logo} /> */}
      <h1 className={styles.h1}>GAMEHUB</h1>
      <a href="/">Catalogo</a>
      <Link className={styles.favoritos} to="/favoritos">
        Favoritos
      </Link>
      <Search />
    </header>
  );
}

export default Cabecalho;
