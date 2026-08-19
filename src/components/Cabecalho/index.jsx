import styles from "./Cabecalho.module.css";
import Search from "../SearchBar";
function Cabecalho() {
  return (
    <header className={styles.Cabecalho}>
      <h1 className={styles.h1}>
        GAMEHUB
      </h1>
      <a href="">Catalogo</a>
      <a href="">Favoritos</a>
      <Search />
    </header>
  );
}
  
export default Cabecalho;
