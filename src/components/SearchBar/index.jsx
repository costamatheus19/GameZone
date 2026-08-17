import styles from "./SearchBar.module.css"

function Search () {
    return (
        <input className={styles.Search} 
        type="search" name="Pesquisar" 
        id=""
        placeholder="Buscar por Jogo" 
        />
    )
}

export default Search