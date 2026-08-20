import styles from "./DetalhesJogos.module.css";
import Cabecalho from "../components/Cabecalho";
function Detalhes() {
  return (
    <div className={styles.Detalhes}>
      <Cabecalho />
        <a href="/">Voltar para o Catalogo</a>

    </div>
  );
}

export default Detalhes;
