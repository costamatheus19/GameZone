import style from './Suporte.module.css';
import Cabecalho from "../components/Cabecalho/index";
import { Link } from "react-router-dom";
import Search from "../components/SearchBar";
function Suporte() {
    return (
        <div className={style.suporte}>
            <header>
            <Cabecalho />
            </header>
            <nav>
                <Search />
            </nav>
            <main>
                <div className={style.container}>
                    <Link to="/">← Voltar</Link>

                </div>
            </main>

        </div>
    );
}

export default Suporte