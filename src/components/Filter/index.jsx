import styles from "./Filter.module.css";

function Filtros({ jogos }) {
  function ordenarPreco(opcao) {
    console.log(jogos);
    console.log(opcao);
  }

  return (
    <div className={styles.filtros}>
      <div className={styles.filtro}>
        <label htmlFor="genero">Gênero</label>

        <select className={styles.select} name="Genero" id="genero">
          <option value="Type">Game</option>
          <option value="Type">DLC</option>
        </select>
      </div>

      <div className={styles.filtro}>
        <label htmlFor="plataforma">Plataforma</label>

        <select className={styles.select} name="Plataforma" id="plataforma">
          <option value="plataforms">Plataformas</option>
          <option value="platforms">PC</option>
          <option value="platforms">Steam</option>
          <option value="platforms">Android</option>
          <option value="platforms">IOS</option>
          <option value="platforms">Epic Games Store</option>
        </select>
      </div>

      <div className={styles.filtro}>
        <label htmlFor="ordenar">Ordenar por</label>

        <select
          className={styles.select}
          name="Ordenar"
          id="ordenar"
          onChange={(evento) => ordenarPreco(evento.target.value)}
        >
          <option value="">Mais populares</option>
          <option value="opcaoMaior">Maior Preço</option>
          <option value="opcaoMenor">Menor Preço</option>
        </select>
      </div>

      <button className={styles.limpar} type="button">
        Limpar filtros
      </button>
    </div>
  );
}

export default Filtros;
