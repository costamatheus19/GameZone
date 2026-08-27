import styles from "./Filter.module.css";

function Filtros({
  jogos,
  plataforma,
  tipo,
  setTipo,
  setPlataforma,
  setPaginaAtual
}) {
  function ordenarPreco(opcao) {
    console.log(jogos);
    console.log(opcao);
  }

  return (
    <div className={styles.filtros}>
      <div className={styles.filtro}>
        <label htmlFor="Tipos">Tipos</label>

        <select
          className={styles.select}
          name="Tipo"
          id="tipo"
          value={tipo}
          onChange={(evento) => {
            setTipo(evento.target.value);
            setPaginaAtual(1);
          }}
        >
          <option value="">Tipos</option>
          <option value="Game">Game</option>
          <option value="DLC">DLC</option>
        </select>
      </div>

      <div className={styles.filtro}>
        <label htmlFor="plataforma">Plataforma</label>

        <select
          className={styles.select}
          name="Plataforma"
          id="plataforma"
          value={plataforma}
          onChange={(evento) => {
            setPlataforma(evento.target.value);
            setPaginaAtual(1);
          }}
        >
          <option value="">Plataformas</option>
          <option value="PC">PC</option>
          <option value="Steam">Steam</option>
          <option value="Android">Android</option>
          <option value="IOS">IOS</option>
          <option value="Epic Games Store ">Epic Games Store</option>
        </select>
      </div>

      {/* <div className={styles.filtro}>
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
      </div> */}

      <button
        className={styles.limpar}
        type="button"
        onClick={() => {
          setPlataforma("");
          setTipo("");
          setPaginaAtual(1);
        }}
      >
        Limpar filtros
      </button>
    </div>
  );
}

export default Filtros;
