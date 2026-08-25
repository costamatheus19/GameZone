import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/DetalhesJogo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/jogo/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
