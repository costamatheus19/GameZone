export function adicionarFavorito(jogo) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const jaExiste = favoritos.some(
    (favorito) => favorito.id === jogo.id
  );

  if (!jaExiste) {
    favoritos.push(jogo);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

export function removerFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const favoritosAtualizados = favoritos.filter(
    (favorito) => favorito.id !== id
  );

  localStorage.setItem(
    "favoritos",
    JSON.stringify(favoritosAtualizados)
  );
}

export function buscarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return favoritos;
}

export function limparFavoritos() {
  localStorage.removeItem("favoritos");
}