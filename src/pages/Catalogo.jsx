import styles from "./Catalogo.module.css";
import Cabecalho from "../components/Cabecalho/index";
import Search from "../components/SearchBar/index";
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

        console.log(resposta);

        setJogos(resposta.data);
      } catch (erro) {
        console.log("Erro ao buscar os jogos:", erro);
      }
    }

    buscarJogos();
  }, []);

  return (
    <div>
      <Cabecalho />
      <h1>Encontre seus Jogos</h1>
      <p>Encontre seus jogos</p>
      <Search />
      <Filtros jogos={jogos} />

      <div className={styles.listaJogos}>
        {jogos.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} />
        ))}
      </div>

    </div>
  );
}

export default Catalogo;
