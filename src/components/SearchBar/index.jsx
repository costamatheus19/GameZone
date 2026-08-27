import style from "./SearchBar.module.css";

function Search({ className, value, onChange }) {
  return (
    <div className={`${style.wrapper} ${className || ""}`}>
      {/* icone de pesquisa */}
      <svg
        className={style.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        className={style.Search}
        type="search"
        name="Pesquisar"
        placeholder="Buscar por Jogo..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Search;
