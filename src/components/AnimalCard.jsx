import { Link } from 'react-router-dom'

export default function AnimalCard({ animal, favorito, onFavorito }) {
  return (
    <article className="card">
      <Link to={`/animal/${animal.id}`} className="card-link">
        <img src={animal.imagem} alt={animal.nome} loading="lazy" />
        <div className="card-body">
          <h3>{animal.nome}</h3>
          <p className="muted">{animal.raca}</p>
          <div className="tags">
            <span className={`tag ${animal.tipo === 'Cão' ? 'tag-cao' : 'tag-gato'}`}>{animal.tipo}</span>
            <span className="tag">📍 {animal.localizacao}</span>
          </div>
        </div>
      </Link>
      <button
        className={`fav ${favorito ? 'ativo' : ''}`}
        onClick={() => onFavorito(animal.id)}
        aria-label="Favorito"
      >
        {favorito ? '♥' : '♡'}
      </button>
    </article>
  )
}
