// import { useEffect } from "react";
import styles from "./Filter.module.css"
function Filtros ({ jogos }) {
    function ordenarPreco(opcao) {
        
        console.log(jogos);
        
        console.log(opcao);
        
    }

    return(
        <div className={styles.Filtros}>
            <select name="Genero" id="">
                <option value="Type">Game</option>
                <option value="Type">DLC</option>
            </select>

            <select name="Plataforma" id="">
                <option value="plataforms">Plataformas</option>
                <option value="platforms">PC</option>
                <option value="platforms">Steam</option>
                <option value="platforms">Android</option>
                <option value="platforms">IOS</option>
                <option value="platforms"> Epic Games Store</option>
            </select>

            <select 
            name="Ordenar"
            onChange={(evento) =>ordenarPreco(evento.target.value) }    
            >
            <option value="">Ordenar Por Preço</option>
            <option value="opcaoMaior">Maior Preço</option>
            <option value="opcaoMenor">Menor Preço</option>
            </select>

        </div>
    )
}


export default Filtros;