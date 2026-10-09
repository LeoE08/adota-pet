import { useMemo, useState } from 'react'
import { useAnimais } from '../hooks/useAnimais'
import { useFavoritos } from '../hooks/useFavoritos'
import AnimalCard from '../components/AnimalCard'
import Filtros from '../components/Filtros'
import Loading from '../components/Loading'

const INICIAL = { pesquisa: '', tipo: '', raca: '', local: '', soFavoritos: false }

export default function Home() {
  const { animais, loading, erro } = useAnimais()
  const { alternar, eFavorito } = useFavoritos()
  const [filtros, setFiltros] = useState(INICIAL)

  const racas = useMemo(
    () => [...new Set(animais.filter((a) => !filtros.tipo || a.tipo === filtros.tipo).map((a) => a.raca))].sort(),
    [animais, filtros.tipo],
  )
  const locais = useMemo(() => [...new Set(animais.map((a) => a.localizacao))].sort(), [animais])

  const filtrados = animais.filter((a) => {
    const termo = filtros.pesquisa.toLowerCase()
    return (
      (!termo || a.nome.toLowerCase().includes(termo) || a.raca.toLowerCase().includes(termo)) &&
      (!filtros.tipo || a.tipo === filtros.tipo) &&
      (!filtros.raca || a.raca === filtros.raca) &&
      (!filtros.local || a.localizacao === filtros.local) &&
      (!filtros.soFavoritos || eFavorito(a.id))
    )
  })

  return (
    <>
      <section className="hero">
        <h1>Encontra o teu novo melhor amigo</h1>
        <p>Cães e gatos à espera de uma família em todo o país.</p>
      </section>

      {loading && <Loading texto="A carregar animais..." />}
      {erro && <div className="estado erro">{erro}</div>}

      {!loading && !erro && (
        <>
          <Filtros filtros={filtros} setFiltros={setFiltros} racas={racas} locais={locais} total={filtrados.length} />
          {filtrados.length === 0 ? (
            <div className="estado">
              <p>Nenhum animal encontrado com estes filtros.</p>
              <button className="btn" onClick={() => setFiltros(INICIAL)}>Limpar filtros</button>
            </div>
          ) : (
            <div className="grid">
              {filtrados.map((a) => (
                <AnimalCard key={a.id} animal={a} favorito={eFavorito(a.id)} onFavorito={alternar} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
