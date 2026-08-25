import styles from "./DetalhesJogos.module.css";
import Cabecalho from "../components/Cabecalho";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detalhes() {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  // montando a estrutura dos estados
  useEffect(() => {
    setCarregando(true);

    axios
      .get(`https://www.gamerpower.com/api/giveaway?id=${id}`)
      .then((respota) => {
        //executado caso a procura der certo
        setJogo(respota.data);
      })
      .catch((erro) => {
        //executado caso de errado
        console.error("Erro ao buscar o jogo:", erro);
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [id]);


  if (carregando) {
    return (
      <div className={styles.Detalhes}>
        <Cabecalho />
        <p>Careegando...</p>
      </div>
    );
  }
  if(erro || !jogo) {
    return (
      <div className={styles.Detalhes}>
        <Cabecalho />
        <Link to="/" className={styles.voltar}>← voltar para o catálogo</Link>
        <p>Não foi possivel carregar as informações desse jogo.</p>
      </div>
    )
  }


  

  return (
    <div className={styles.Detalhes}>
      <Cabecalho />
      <Link to="/">←Voltar para o Catalogo</Link>
      
    </div>
  );
}

export default Detalhes;
