export default function About() {
  return (
    <section className="sobre">
      <h1>Sobre a AdotaPet</h1>
      <p>
        A AdotaPet é uma aplicação de adoção de animais desenvolvida em React no âmbito do curso de React JS.
        O objetivo é aproximar cães e gatos que precisam de uma casa de pessoas dispostas a dar-lhes amor.
      </p>
      <h3>Funcionalidades</h3>
      <ul>
        <li>Listagem de animais disponíveis com nome, tipo, raça, imagem e localização</li>
        <li>Página de detalhe para cada animal</li>
        <li>Pesquisa e filtros por tipo, raça e localização</li>
        <li>Lista de favoritos guardada no navegador</li>
      </ul>
      <h3>Tecnologias</h3>
      <ul>
        <li>React (componentes funcionais, JSX, props e state)</li>
        <li>Hooks: useState, useEffect, useMemo e hooks personalizados (useAnimais, useFavoritos)</li>
        <li>React Router para navegação entre páginas</li>
        <li>Dados reais obtidos da Dog CEO API e da The Cat API</li>
        <li>Vite e GitHub Pages</li>
      </ul>
    </section>
  )
}
