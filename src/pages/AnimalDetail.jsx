import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAnimal } from '../hooks/useAnimais'
import { useFavoritos } from '../hooks/useFavoritos'
import Loading from '../components/Loading'

export default function AnimalDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { animal, loading, erro } = useAnimal(id)
  const { alternar, eFavorito } = useFavoritos()
  const [pedido, setPedido] = useState(false)

  if (loading) return <Loading />
  if (erro) return <div className="estado erro">{erro}</div>
  if (!animal)
    return (
      <div className="estado">
        <p>Animal não encontrado.</p>
        <Link className="btn" to="/">Voltar à lista</Link>
      </div>
    )

  return (
    <>
      <button className="voltar" onClick={() => navigate(-1)}>← Voltar</button>
      <section className="detalhe">
        <img src={animal.imagem} alt={animal.nome} />
        <div>
          <h1>{animal.nome}</h1>
          <p className="muted">{animal.raca}</p>
          <ul className="info">
            <li><strong>Tipo:</strong> {animal.tipo}</li>
            <li><strong>Idade:</strong> {animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</li>
            <li><strong>Sexo:</strong> {animal.sexo}</li>
            <li><strong>Localização:</strong> 📍 {animal.localizacao}</li>
            {animal.origem && <li><strong>Origem da raça:</strong> {animal.origem}</li>}
            {animal.temperamento && <li><strong>Temperamento:</strong> {animal.temperamento}</li>}
          </ul>
          <h3>Sobre o {animal.nome}</h3>
          <p>{animal.descricao}</p>
          <div className="acoes">
            <button className="btn" onClick={() => setPedido(true)} disabled={pedido}>
              {pedido ? 'Pedido enviado ✔' : 'Quero adotar'}
            </button>
            <button className="btn btn-sec" onClick={() => alternar(animal.id)}>
              {eFavorito(animal.id) ? '♥ Nos favoritos' : '♡ Adicionar aos favoritos'}
            </button>
          </div>
          {pedido && (
            <p className="sucesso">
              Obrigado! O abrigo de {animal.localizacao} vai entrar em contacto contigo em breve.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
