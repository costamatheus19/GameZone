import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/DetalhesJogo";
import Suporte from "./pages/Suporte";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/jogo/:id" element={<Detalhes />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
