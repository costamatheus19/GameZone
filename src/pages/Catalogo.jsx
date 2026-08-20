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

      <h1 className={styles.h1}>Encontre Seus Jogos Aqui</h1>
      <p>Explore Nossa Coleção de Jogos Gratuitos</p>
      <Search className={styles.SearchLargura} />
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


// codigo para fazer paginação numerada

// import styles from "./Catalogo.module.css";
// import Cabecalho from "../components/Cabecalho/index";
// import Search from "../components/SearchBar";
// import Filtros from "../components/Filter/index";
// import GameCard from "../components/GameCard";
// import Pagination from "../components/Pagination"; // <- novo componente
// import axios from "axios";
// import { useEffect, useState } from "react";

// const ITENS_POR_PAGINA = 12; // ajuste ao seu gosto

// function Catalogo() {
//   const [jogos, setJogos] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     async function buscarJogos() {
//       try {
//         const resposta = await axios.get(
//           "https://www.gamerpower.com/api/giveaways",
//         );

//         console.log(resposta);

//         setJogos(resposta.data);
//       } catch (erro) {
//         console.log("Erro ao buscar os jogos:", erro);
//       }
//     }

//     buscarJogos();
//   }, []);

//   const totalPages = Math.ceil(jogos.length / ITENS_POR_PAGINA);
//   const jogosPaginados = jogos.slice(
//     (page - 1) * ITENS_POR_PAGINA,
//     page * ITENS_POR_PAGINA
//   );

//   return (
//     <div>
//       <Cabecalho />

//       <h1 className={styles.h1}>Encontre Seus Jogos Aqui</h1>
//       <p>Explore Nossa Coleção de Jogos Gratuitos</p>
//       <Search className={styles.SearchLargura} />
//       <Filtros jogos={jogos} />
//       <div className={styles.listaJogos}>
//         {jogosPaginados.map((jogo) => (
//           <GameCard key={jogo.id} jogo={jogo} />
//         ))}
//       </div>
//       <Pagination
//         currentPage={page}
//         totalPages={totalPages}
//         onPageChange={setPage}
//       />
//     </div>
//   );
// }

// export default Catalogo;