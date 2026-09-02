import styles from "./Catalogo.module.css";
import Cabecalho from "../components/Cabecalho/index";
import Search from "../components/SearchBar";
import Filtros from "../components/Filter/index";
import GameCard from "../components/GameCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Catalogo() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    async function buscarJogos() {
      try {
        const resposta = await axios.get(
          "https://www.gamerpower.com/api/giveaways",
        );

        console.log(resposta.data);

        setJogos(resposta.data);
      } catch (erro) {
        console.log("Erro ao buscar os jogos:", erro);
      }
    }

    buscarJogos();
  }, []);

  // FILTROS E PAGINAÇÃO
  const [busca, setBusca] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [tipo, setTipo] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const jogosPorPagina = 12;

  // FILTROS
  const jogosFiltrados = jogos.filter((jogo) => {
    const correspondeBusca = jogo.title
      .toLowerCase()
      .includes(busca.toLowerCase());

    const correspondePlataforma =
      plataforma === "" || jogo.platforms.includes(plataforma);

    const correspondeTipo = tipo === "" || jogo.type === tipo;

    return correspondeBusca && correspondePlataforma && correspondeTipo;
  });

  // PAGINAÇÃO
  const indiceInicial = (paginaAtual - 1) * jogosPorPagina;
  const indiceFinal = indiceInicial + jogosPorPagina;

  const jogosDaPagina = jogosFiltrados.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(jogosFiltrados.length / jogosPorPagina);

  // RENDERIZAÇÃO
  return (
    <div>
      <Cabecalho />
      <h1 className={styles.h1}>Encontre Seus Jogos Aqui</h1>
      <p>Explore Nossa Coleção de Jogos Gratuitos</p>
      <Search
        className={styles.SearchLargura}
        onChange={(e) => {
          setBusca(e.target.value);
          setPaginaAtual(1);
        }}
        value={busca}
      />
      <Filtros
        className={styles.filtroJogos}
        jogos={jogos}
        plataforma={plataforma}
        setPlataforma={setPlataforma}
        tipo={tipo}
        setTipo={setTipo}
        setPaginaAtual={setPaginaAtual}
      />
      <p>
        {jogosFiltrados.length === 0
          ? "nenhum jogo encontrado"
          : jogosFiltrados.length + " jogos encontrados"}{" "}
      </p>
      <div className={styles.listaJogos}>
        {jogosDaPagina.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} />
        ))}
      </div>
      <div className={styles.paginacao}>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setPaginaAtual(index + 1)}
            className={paginaAtual === index + 1 ? styles.ativo : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
