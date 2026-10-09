export default function Filtros({ filtros, setFiltros, racas, locais, total }) {
  const alterar = (campo) => (e) => setFiltros({ ...filtros, [campo]: e.target.value })

  return (
    <section className="filtros">
      <input
        type="search"
        placeholder="Pesquisar por nome ou raça..."
        value={filtros.pesquisa}
        onChange={alterar('pesquisa')}
      />
      <select value={filtros.tipo} onChange={alterar('tipo')}>
        <option value="">Todos os tipos</option>
        <option value="Cão">Cães</option>
        <option value="Gato">Gatos</option>
      </select>
      <select value={filtros.raca} onChange={alterar('raca')}>
        <option value="">Todas as raças</option>
        {racas.map((r) => <option key={r}>{r}</option>)}
      </select>
      <select value={filtros.local} onChange={alterar('local')}>
        <option value="">Todas as localizações</option>
        {locais.map((l) => <option key={l}>{l}</option>)}
      </select>
      <label className="check">
        <input
          type="checkbox"
          checked={filtros.soFavoritos}
          onChange={(e) => setFiltros({ ...filtros, soFavoritos: e.target.checked })}
        />
        Só favoritos
      </label>
      <span className="muted">{total} resultado(s)</span>
    </section>
  )
}
